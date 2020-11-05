const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

require("dotenv").config();

const withPlugins = require("next-compose-plugins");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   ...withLess(
//     withSass({
//       lessLoaderOptions: {
//         javascriptEnabled: true,
//       },
//     })
//   ),
// });

module.exports = withPlugins([
  [
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      },
      ...withLess(
        withSass({
          lessLoaderOptions: {
            javascriptEnabled: true,
          },
        })
      ),
    }),
  ],
  [
    {
      env: {
        MONGODB_URI: process.env.MONGODB_URI,
        DB_NAME: process.env.DB_NAME,
        jwtSecret: process.env.jwtSecret,
      },
    },
  ],
]);

//  MongoDB Credentials

// module.exports = {
//   env: {
//     MONGODB_URI: process.env.MONGODB_URI,
//     DB_NAME: process.env.DB_NAME,
//   },
// };
