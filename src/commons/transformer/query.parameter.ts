import { isObject } from "util";

export const queryParams = function(query) {
    const params = {
        include: query.include ? query.include.split(",") : null,
        filter: query.filter,
    }

    const getRelations = function() {
        return params.include
    }

    const getFilter = function() {
        const filter = [];
        if (params.filter && isObject(params.filter)) {
            for (const key in params.filter) {
               const domainField = key.split(".");
               const domain = domainField[0];
               const field = domainField[1];
               filter.push({domain, field, criteria: params.filter[key]})
            }
        }
        return filter.length>0 ? filter : null;
    }

    return {
        filter: getFilter(),
        relations: getRelations()
    }
}