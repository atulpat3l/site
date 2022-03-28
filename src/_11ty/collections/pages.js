module.exports = (collection) => {
  return collection.getFilteredByGlob("./src/content/pages/*.md");
};
