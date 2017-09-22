export function normalizeCallbackVariables(object: any) {
  let objectNormalized = {};

  Object.keys(object).forEach((key: string) => {
    let camelCasedKey = key.replace(/_([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });

    objectNormalized[camelCasedKey] = object[key];
  });

  return objectNormalized;
}
