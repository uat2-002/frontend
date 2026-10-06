/** @type {import('i18next-cli').I18nextToolkitConfig} */
export default {
  locales: [
    "en",
    "uk"
  ],
  extract: {
    input: "src/**/*.{js,jsx,ts,tsx}",
    output: "public/locales/{{language}}/{{namespace}}.json",
    exclude: [
      "src/components/ui/**",
      "**/*.stories.{js,jsx,ts,tsx}",
      "**/*.test.{js,jsx,ts,tsx}"
    ]
  }
}