const renderTextAreaFields = (textAreaJson) => {
  JSON.parse(JSON.stringify(textAreaJson)).map((item) => {
    formHandler.content.fields.push({
      config: {
        id: `${item.name}`,
        name: `${item.name}`,
        preset: "textarea",
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
          text: item.label,
        },
        value: "",
      },
    });
  });
};

module.exports = {
  renderTextAreaFields,
};
