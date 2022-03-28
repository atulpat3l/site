module.exports = (collection) => {
  return collection
    .getFilteredByGlob("./src/content/posts/*.md")
    .filter((post) => post.data.featured);
};
