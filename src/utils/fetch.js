/**
 * @callback FetchFunction
 * @param {string} path
 * @param {RequestInit} [init]
 */

/**
 * @param {string} [origin] baseURL of the returned fetch function.
 * @returns {FetchFunction}
 */
export function setupFetch(origin = undefined) {
  return async (path, init = undefined) => {
    const url = new URL(path, origin && origin);

    url.searchParams.sort();

    const response = await fetch(url.toString(), init);
    return response;
  };
}
