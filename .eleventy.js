const fs = require("fs");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const dateFilter = require("./src/_11ty/filters/date-filter.js");
const w3DateFilter = require("./src/_11ty/filters/w3-date-filter.js");
const blogFeed = require("./src/_11ty/collections/blogFeed.js");
const featuredPosts = require("./src/_11ty/collections/featuredPosts.js");
const postCollection = require("./src/_11ty/collections/postCollection.js");
const pagesCollection = require("./src/_11ty/collections/pages.js");

module.exports = (eleventyConfig) => {
  // Filters
  eleventyConfig.addFilter("dateReadable", dateFilter);
  eleventyConfig.addFilter("w3DateFilter", w3DateFilter);

  // Collections
  eleventyConfig.addCollection("post", postCollection);
  eleventyConfig.addCollection("pages", pagesCollection);
  eleventyConfig.addCollection("featuredPosts", featuredPosts);
  eleventyConfig.addCollection("blog", blogFeed);

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  // Add Watch Targets
  eleventyConfig.addWatchTarget("src/assets/css");

  // AddPassthroughCopy
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  //404 routing in local environment
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404.html");
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
