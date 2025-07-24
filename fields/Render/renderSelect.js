const renderSelectFields = (selectJson) => {
  selectJson.forEach((item) => {
    if (item.dependentField) {
      let value;
      if (
        item.options[0].label.text == "" ||
        item.options[0].label.text == "Please Select"
      ) {
        value = "";
      } else if (item.options[0].label.text == "No") {
        value = "No";
      } else if (item.options[0].label.text == "Yes") {
        value = "Yes";
      } else if (item.options[0].label.text == "United States") {
        value = "US";
      } else {
        value = "CA";
      }

      formHandler.content.fields.push({
        config: {
          id: `${item.name}`,
          name: `${item.name}`,
          preset: "dropdown",
          classes: item.classes,
          enabler: item.enabler,
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
          value,
          options: item.options,
        },
      });
    } else {
      if (item.name == "country") {
        formHandler.content.fields.push({
          config: {
            id: `${item.name}`,
            name: `${item.name}`,
            preset: "country",
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
            value: item.value.toUpperCase(),
          },
        });
      } else if (
        item.dependentFieldSlave &&
        item.name == "whatdoyouneedhelpwith"
      ) {
        formHandler.content.fields.push({
          config: {
            id: `${item.name}`,
            name: `${item.name}`,
            preset: "dropdown",
            classes: "dependentFieldSlave",
            needsEnabler: true,
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
            value:
            item.options[0].value == "" ? "" : "",
            options: function () {
              if(item.options[0].value.toLowerCase() === ("Please select").toLowerCase()){
                item.options[0].value = ""
                return item.options
              }else{
                return item.options
              }
              }(),
          },
        });
      } else {
        formHandler.content.fields.push({
          config: {
            id: `${item.name}`,
            name: `${item.name}`,
            preset: "dropdown",
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
            value:
              item.options[0].value == "" ? "" : item.options[0].label.text,
            options: item.options,
          },
        });
      }
    }
  });
};

module.exports = {
  renderSelectFields,
};
