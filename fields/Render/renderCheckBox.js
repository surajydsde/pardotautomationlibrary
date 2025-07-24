const renderCheckboxFields = (checkboxJson) => {
  (checkboxJson).forEach((item) => {
    needsEnabler = item.needsEnabler
    formHandler.content.fields.push({
      config: {
        id: `${item.name}`,
        name: `${item.name}`,
        preset: "consent",
        needsEnabler,
        validations: {
          required: Boolean(item.required),
        },
      },
      content: {
        errorMessages: {
          default: `${item.errorMsg}`,
        },
        label: {
          text: `${item.label}`,
        },
        placeholder: {
          text: ""
        },
        value: "",
      },
    });
  });
};

module.exports = {
  renderCheckboxFields,
};
