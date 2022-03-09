export default [
  {
    type: "textfield",
    input: true,
    key: "providerOptions.params['api-key']",
    label: "Franchise API key",
    placeholder: "Enter Franchise API Key",
    weight: 10,
    tooltip: "You must have an API key in order to use this component.",
    description:
      "You must have a API key in order to use this component, please contact xxx@xxx.com if you want to acquire an API key.",
    validate: {
      required: true,
    },
  },
];
