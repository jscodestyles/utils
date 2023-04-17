
export const Pick = (object: Object, properties: String) => {
    const result = {};
    if (isUndefinedOrNullOrEmptyObject(object) || isUndefinedOrNullOrEmpty(properties)) return result;
    const props = isString(properties) ? properties.split(',') : properties;
    props.forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(object, key) && !isUndefinedOrNullOrEmpty(object[key])) result[key] = deepCopy(object[key]);
    });
    return result;
};