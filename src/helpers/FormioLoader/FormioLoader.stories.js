import {
  InitFormio,
  initFormioTemplate,
  initFormioCode,
  InitFormioInstance,
  initFormioInstanceTemplate,
  initFormioInstanceCode,
  CustomOptions,
  customOptionsTemplate,
  customOptionsCode,
  CustomController,
  customControllerTemplate,
  customControllerCode,
} from "./stories";

export default {
  title: "Helpers/FormioLoader",
};

export const InitFormioRender = {
  render: () => {
    setTimeout(() => {
      InitFormio();
    });

    return initFormioTemplate;
  },

  name: "initFormio",

  parameters: {
    docs: {
      source: {
        code: initFormioCode,
        language: "html",
      },
    },
  },
};

export const InitFormioInstanceRender = {
  render: () => {
    setTimeout(() => {
      InitFormioInstance();
    });

    return initFormioInstanceTemplate;
  },

  name: "initFormioInstance",

  parameters: {
    docs: {
      source: {
        code: initFormioInstanceCode,
        language: "html",
      },
    },
  },
};

export const CustomCreateFormOptionsRender = {
  render: () => {
    setTimeout(() => {
      CustomOptions();
    });

    return customOptionsTemplate;
  },

  name: "custom CreateForm Options",

  parameters: {
    docs: {
      source: {
        code: customOptionsCode,
        language: "html",
      },
    },
  },
};

export const CustomCreateFormControllerRender = {
  render: () => {
    setTimeout(() => {
      CustomController();
    });

    return customControllerTemplate;
  },

  name: "custom CreateForm controller",

  parameters: {
    docs: {
      source: {
        code: customControllerCode,
        language: "html",
      },
    },
  },
};
