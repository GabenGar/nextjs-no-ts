/**
 * @param {number} time
 */
export function sleep(time = 250) {
  const timeOut = new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  return timeOut;
}
