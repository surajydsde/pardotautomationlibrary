const renderRadioButtonFields = (radioJson) => {
   (radioJson).forEach((item,index) => {

      formHandler.content.fields.push({
        config: {
            id: `${item.name}`,
            name: `${item.name}`,
            preset: "radio",
            classes: `${item.classes}`,
            needsEnabler: Boolean(item.dependentFieldSlave ? true : false),
            validations: {
            required: Boolean(item.required),
          }
        },
        content: {
            errorMessages: {
                default: `${item.errorMsg}`,
              },
              label: {
                text: `${item.secTitle}`,
              },
              placeholder: {
                text: `${item.secTitle}`,
              },
            options: item.options,
            value: ""
        }
      })
      });
  };
  
  module.exports = {
    renderRadioButtonFields,
  };
  