const config = {
  "**/*.js?(x)": nextLint,
  "**/*": "prettier --write --ignore-unknown",
};

/**
 * @param {string[]} filenames
 */
function nextLint(filenames) {
  const filesString = filenames
    .map((file) => file.split(process.cwd())[1])
    .join(" --file ");

  return `next lint --fix --file ${filesString}`;
}

module.exports = config;
