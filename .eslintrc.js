module.exports = {
  "extends": [
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "react"
  ],
  "rules":{
    "react/prop-types": [2, { ignore: ['children'] }]
  },
  "parser": "babel-eslint",
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
