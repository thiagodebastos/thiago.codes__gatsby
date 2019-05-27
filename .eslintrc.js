module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react"],
  parser: "babel-eslint",
  settings: {
    react: {
      version: "detect",
    },
  },
}
