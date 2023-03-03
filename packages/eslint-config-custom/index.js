module.exports = {
  extends: ["next", "turbo", "plugin:prettier/recommended"],
  plugins: ["unused-imports"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-unused-vars": "error",
		"unused-imports/no-unused-imports": "error",
  },
};