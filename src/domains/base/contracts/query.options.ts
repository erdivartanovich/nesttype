import { ResponseException } from "../../../commons/exception/response.exception";
import { HttpStatus } from "@nestjs/common";

export interface QueryOptions {
    relations: string[],
    filter: string[],
    where: string[],
    pagination: {offset: number, limit: number}
}

export const queryParams = function(query): QueryOptions {
    const relations = query.include ? query.include.split(",") : null;
    const {filter, where} = query.filter ? buildFilter(query.filter) : null;
    const {offset, limit} = query.page ? query.page : {offset: 0, limit: 0};
    const params: QueryOptions = {
        relations: relations,
        filter: filter,
        where: where,
        pagination: {offset: offset||0, limit: limit||0}
    }
    return params;
}

function buildFilter(raw: Object): {filter: string[], where: string[]} {
    const filter = [];
    const where = [];
    
    Object.keys(raw).map((key, index) => {
        let criteria, fields, condition;
        let op = Object.keys(raw[key])[0];
        let {operator, tipe} = mapOperator(op);    
        
        criteria = mapCriteria(tipe, raw[key][op]);
        fields = key.split(",");
        condition = [fields, operator, criteria].join(" ");

        if (key.includes(".")) {
            fields.map(field => filter.push(condition));
        } else {
            fields.map(field => where.push(condition));
        }
    });

    return {
        filter: filter,
        where: where
    };
}


const mapping = {
    'like': {operator: 'like', tipe: 'string'},
    '!like': {operator: 'not like', tipe: 'string'},
    'is': {operator: '=', tipe: 'general'},
    '!is': {operator: '<>', tipe: 'general'},
    'between': {operator: 'between', tipe: 'range'},
    'gt': {operator: '>', tipe: 'general'},
    'gte': {operator: '>=', tipe: 'number'},
    'lt': {operator: '<', tipe: 'general'},
    'lte': {operator: '<=', tipe: 'number'},
    'in': {operator: 'in', tipe: 'array'},
    '!in': {operator: 'not in', tipe: 'array'}
}

function mapOperator(operator: string): {operator: string, tipe: string} {
    const op = operator || '=';
    if (op in mapping) {
        return mapping[op.trim()];
    }
    throw (new ResponseException(`Filter operator ${operator} is not supported`, 'BadQueryParameter', HttpStatus.BAD_REQUEST));
}

function mapCriteria(tipe, criteria:  string): string {
    var criteriaValue = `\'${criteria}\'`;
    const criteriaMapping = {
        'range': buildRangeValues(criteria),
        'string': `\'${criteria}\'`,
        'general': `\'${criteria}\'`,
        'number': criteria,
        'array': buildArrayValue(criteria),
    }
    if (tipe in criteriaMapping) {
        criteriaValue = criteriaMapping[tipe]
    }
    return criteriaValue;
}

function buildRangeValues(criteria) {
    const quotedValues = criteria.split(", ").map(value => `\'${value}\'`);
    return quotedValues.join(" and ");
}

function buildArrayValue(criteria) {
    const quotedValues = criteria.split(", ").map(value => `'${value}'`);
    return `(${quotedValues.join(", ")})`;
}