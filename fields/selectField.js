const selectField = ($, jsonAlias, selectJson, dependentField, countryCode) => {
  const dependentFieldSlave = Array.from(dependentField);
  let saveDep = [];
  dependentFieldSlave.map((val) => {
    saveDep.push(val.name);
  });

  $("select").each(function (index, element) {
    const getName = $(element).parent().attr("class");
    if (getName.includes("form-field-primary")) {
      element.attribs.dependentField = true;
      element.attribs.classes = "form-field-primary";

      getName?.split(" ").map((name, index) => {
        const getfinalData = jsonAlias.filter((item, index) => {
          return item.alias.includes(name);
        });

        getfinalData.map((item) => {
          element.attribs.name = item.name;
          element.attribs.class = item.name;
          element.attribs.label = $(element)
            .parent()
            .parent()
            .find(".ppvx_text-input__label")
            .text();
          element.attribs.errorMsg = $(element)
            .parent()
            .parent()
            .find(".ppvx_text-input__error-text")
            .text();
          element.attribs.errorMsg !== ""
            ? (element.attribs.required = true)
            : (element.attribs.required = false);
          element.attribs.options = [];
          element.attribs.enabler = [];

          if (item.name == "country") {
            console.log("countey block");
            $(this)
              .find("option")
              .each((i, op) => {
                if (!$(op).text() == "") {
                  if ($(op).text() == "Please Select") {
                    element.attribs.options.push({
                      label: {
                        text: $(op).text(),
                      },
                      value: "",
                    });
                  } else {
                    if ($(op).text() == "United States") {
                      element.attribs.enabler.push({
                        rule: "is",
                        value: "US",
                        enable: [saveDep[0]],
                      });
                    } else {
                      element.attribs.enabler.push({
                        rule: "is",
                        value: "CA",
                        enable: [saveDep[1]],
                      });
                    }
                    element.attribs.options.push({
                      label: {
                        text: $(op).text(),
                      },
                      value: $(op).text() == "United States" ? "US" : "CA",
                    });
                  }
                }
              });
          } else if (item.name == "doyoualreadyhaveapaypalbusinessaccount") {
            element.attribs.enabler.push({
              rule: "is",
              value: "Yes",
              enable: saveDep,
            });
            $(this)
              .find("option")
              .each((i, op) => {
                if (!$(op).text() == "") {
                  console.log($(op).text(), "inside do you value balck");
                  if ($(op).text().includes("Select")) {
                    element.attribs.options.push({
                      label: {
                        text: $(op).text(),
                      },
                      value: "",
                    });
                  } else {
                    element.attribs.options.push({
                      label: {
                        text: $(op).text(),
                      },
                      value: $(op).text(),
                    });
                  }
                }
              });
          } else {
          }
        });
        selectJson.add(element.attribs);
      });
    } else {
      if (getName.includes("form-field-secondary")) {
        element.attribs.dependentFieldSlave = true;
        element.attribs.classes = "form-field-secondary";
      }

      getName?.split(" ").map((name, index) => {
        const getfinalData = jsonAlias.filter((item, index) => {
          return item.alias.includes(name);
        });

        getfinalData.map((item) => {
          element.attribs.name = item.name;
          element.attribs.class = item.name;
          element.attribs.label = $(element)
            .parent()
            .parent()
            .find(".ppvx_text-input__label")
            .text();
          element.attribs.errorMsg = $(element)
            .parent()
            .parent()
            .find(".ppvx_text-input__error-text")
            .text();
          element.attribs.errorMsg.replace(".", "");
          element.attribs.errorMsg !== ""
            ? (element.attribs.required = true)
            : (element.attribs.required = false);
          element.attribs.options = [];

          if (item.name == "country") {
            element.attribs.value = countryCode;
          } else {
            $(this)
              .find("option")
              .each((i, op) => {
                if (!$(op).text() == "") {
                  if ($(op).text().includes("Select")) {
                    element.attribs.options.push({
                      label: {
                        text: $(op).text(),
                      },
                      value: "",
                    });
                  } else {
                    element.attribs.options.push({
                      label: {
                        text: $(op).text(),
                      },
                      value: $(op).text(),
                    });
                  }
                }
              });
          }
        });
        selectJson.add(element.attribs);
      });
    }
  });
};

module.exports = {
  selectField,
};
