const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
   entry: path.join(__dirname, "src", "index.jsx"),
   module: {
      rules: [
         {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
               },
            },
         },
         {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            use: [
               {
                  loader: "optimized-images-loader",
                  options: {
                     includeStrategy: 'react',
                     // see below for available options in > https://github.com/cyrilwanner/optimized-images-loader
                  },
               },
            ],
         },
      ],
   },
   resolve: {
      extensions: ['*', '.js', '.jsx', '.scss']
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, "src", "index.html"),
      }),
      new CopyPlugin({
         patterns: [
            { from: "public" }
         ],
      }),
   ],
};

module.exports = config;