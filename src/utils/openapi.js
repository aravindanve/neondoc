// TODO: add support for $ref

export const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'];

export const entries = (object) => Object.keys(object).map((key) => [key, object[key]]);

export const operationsForTagName = (tagName, paths) =>
  entries(paths).flatMap(([path, pathItem]) =>
    entries(pathItem)
      .filter(([key]) => methods.indexOf(key) !== -1)
      .filter(([, operation]) => operation.tags.indexOf(tagName) !== -1)
      .map(([method, operation]) => ({ _path: path, _method: method, ...operation })),
  );

export const parametersForLocation = (location, parameters) =>
  parameters.filter((parameter) => parameter.in === location);

// TODO: improve
export const summaryForSchema = (schema) => (typeof schema === 'object' ? schema.type : 'any');

export const summaryForOperation = (operation) =>
  operation && (operation.summary || [operation._method.toUpperCase(), operation._path].join(' '));

export const fullName = (name, baseName = '', baseIsArray = false) =>
  baseName ? `${baseName}${baseIsArray ? `[${name}]` : `.${name}`}` : name;

export const baseName = (name) =>
  /\]$/.test(name) ? name.replace(/\[[^\]]*\]$/, '') : /\.[^.]+$/.test(name) ? name.replace(/\.[^.]+$/, '') : '';
