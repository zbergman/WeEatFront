const isArray = (a) => {
    return Array.isArray(a);
};

const isObject = (o) => {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const toCamel = (s) => {
    return s.replace(/([-_][a-z0-9])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
};

export const keysToCamel = (o) => {
    if (isObject(o)) {
      const n = {};
  
      Object.keys(o)
        .forEach((k) => {
          n[toCamel(k)] = keysToCamel(o[k]);
        });
  
      return n;
    } else if (isArray(o)) {
      return o.map((i) => {
        return keysToCamel(i);
      });
    }
  
    return o;
  };