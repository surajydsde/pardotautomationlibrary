const { replaceText } = require("../utils/utils");

const radioField = ($, jsonAlias, radioJson) => {

    $("[type='radio']").each((index, element) => {
        const getName = $(element).parent().parent().parent().attr("class");
        if(getName.includes("form-field-secondary")){
            element.attribs.dependentFieldSlave = true;
            element.attribs.classes = "dependentFieldSlave";
        }

        console.log($(element.html()))

        getName?.split(" ").map((name, index) => {
            const getfinalData = jsonAlias.filter((item, index) => {
              return item.alias.includes(name);
            });

            // console.log(getfinalData)
            getfinalData.map((item,index) => {
              element.attribs.name = item.name.replace('"', "");
              element.attribs.class = name;
              element.attribs.secTitle = $(element).parent().parent().parent().find("label.ppvx_text-input__label").text()
              element.attribs.options = [];
              $(element).removeAttr("id")
              $(element).removeAttr("value")
              element.attribs.options.push( {label: {text: replaceText($(element).parent().find("label").html())},
              value: replaceText($(element).parent().find("label").html())})
             
              element.attribs.errorMsg !== ""
                ? (element.attribs.required = true)
                : (element.attribs.required = false);
            });

        })
        radioJson.add(element.attribs);
      });
};

module.exports = {
    radioField,
};
