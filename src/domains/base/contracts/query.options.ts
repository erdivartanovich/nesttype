export interface QueryOptions {
    relations: Array<string>,
    filter: Array<string>
}

export const queryParams = function(query): QueryOptions {
    const relations = query.include ? query.include.split(",") : null;
    const filter = buildFilter(query.filter);
    const params: QueryOptions = {
        relations: relations,
        filter: filter ? filter : null,
    }
    return params;
}

function buildFilter(raw: Object): Array<string> {
    const filter = [];
    Object.keys(raw).map((key, index) => {
        let operator = Object.keys(raw[key])[0];
        let criteria = "\"" + raw[key][operator] + "\"";
        let fields = key.split(",");
        fields.map(field => filter.push([field, operator, criteria].join(" ")));
    });
    return filter.length>0 ? filter : null;
}