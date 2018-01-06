const injector = (function() {
  'use strict';

  const deps = {};

  function resolve(constructor) {
    if ($.type(constructor) === "function") {
      try {
	return new constructor();
      } catch (err) {
        return constructor;
      }
    } else if ($.type(constructor) === "array" && $.type(constructor[constructor.length - 1]) === "function") {
      const dependencies = constructor.slice(0, -1).map(resolve);
      const creator = constructor[constructor.length - 1];
      return creator.apply(creator, dependencies);
    } else if ($.type(constructor) === "string") {
      const storedConstructor = deps[constructor];
      if (storedConstructor) {
        return resolve(storedConstructor);
      }
    } else {
      return constructor;
    }
  }

  function expose(key, constructor) {
    deps[key] = constructor;
  }

  return {
    resolve: resolve,
    expose: expose
  };
})();

const resolve = injector.resolve;
const expose = injector.expose;
