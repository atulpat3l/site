module.exports = (collection) => {
  return [
    ...collection.getFilteredByGlob("./src/content/posts/*.md"),
  ].reverse();
};
