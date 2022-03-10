export default [
  {
    type: "textfield",
    input: true,
    key: "providerOptions.params['apiKey']",
    label: "Franchise API key",
    placeholder: "Enter Franchise API Key",
    weight: 10,
    tooltip: "You must have an API key in order to use this component.",
    description:
      "You must have a API key in order to use this component, please contact <a href='mailto:qol.development@smartservice.qld.gov.au' target='_blank'>qol.development@smartservice.qld.gov.au</a> if you want to acquire an API key. (To be confirmed)",
    validate: {
      required: true,
    },
  },
  {
    type: "textfield",
    input: true,
    key: "providerOptions.apiBase",
    label: "Custom API base URL",
    placeholder: "Enter base URL",
    weight: 10,
    tooltip: "Leave blank for using the default URL.",
    description:
      "The default PlsPlus API base URL is `https://www.address.services.qld.gov.au`, you can override that by providing a different base URL.",
  },
];
