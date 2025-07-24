const whatDoYou = ($,jsonAlias,radioJson,countryCode) => {
  const getDependentFieldSlave = $(".form-field-secondary");
  const radiocheck = $(getDependentFieldSlave).attr("class")
  if(radiocheck && radiocheck.includes('form-field-secondary') && radiocheck.includes('pd-radio')){
    $(getDependentFieldSlave).each(function (inx, element) {
      const classN = $(element).attr("class");
      classN?.split(" ").map((name, index) => {
        const getfinalData = jsonAlias.filter((item, index) => {
          return item.alias.includes(name);
        });
  
        getfinalData.map((item) => {
          element.attribs.options = [];
          element.attribs.name = item.name;
          element.attribs.class = item.name;
          element.attribs.label = $(element)
            .find(".ppvx_text-input__label")
            .text();
          element.attribs.errorMsg =
            countryCode.toUpperCase() == "US" || countryCode.toUpperCase() == "UK"
              ? "This field is required"
              : "";
          element.attribs.errorMsg !== ""
            ? (element.attribs.required = true)
            : (element.attribs.required = false);
  
          let lineC = $(element).find(".inline");
          
          $(lineC).map((i, ele) => {
             {
              element.attribs.options.push({
                label: {
                  text: $(ele).text(),
                },
                value: $(ele).text(),
              });
            }
          });
        });
        radioJson.add(element.attribs);
      });
      radioJson.forEach((item) => {
          formHandler.content.fields.push({
            config: {
              id: `${item.name}`,
              name: `${item.name}`,
              preset: "radio",
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
              options: item.options,
              value: "",
            },
          });
        });
    });
  }
};

module.exports = {
    whatDoYou,
  };
  