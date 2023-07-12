module.exports = {
    transformIgnorePatterns: [
      "node_modules/(?!axios)"
    ],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };
  