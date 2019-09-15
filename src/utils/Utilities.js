import { camelCase } from "lodash";

const isObject = o => {
  return o === Object(o) && !Array.isArray(o) && typeof o !== "function";
};

export const keysToCamel = o => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach(k => {
      n[camelCase(k)] = keysToCamel(o[k]);
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map(i => {
      return keysToCamel(i);
    });
  }

  return o;
};
