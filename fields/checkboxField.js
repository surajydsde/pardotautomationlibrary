const { replaceText } = require("../utils/utils");

const checkboxField = ($, jsonAlias,dependentField, checkboxJson,countryCode) => {
  $("[type='checkbox']").each((index, element) => {
    const getName = $(element).parent().parent().parent().attr("class");

    if(getName.includes("form-field-secondary")){
      element.attribs.needsEnabler=true;
      element.attribs.dependentFieldSlave = true
    }

      getName?.split(" ").map((name, index) => {
        const getfinalData = jsonAlias.filter((item, index) => {
          return item.alias.includes(name);
        });
  
        getfinalData.map((item) => {
       
          element.attribs.name = item.name.replace('"', "");
          element.attribs.class = name;
          element.attribs.label = replaceText($(element).parent().find("label").html())
          element.attribs.label +=  !$(element).parent().parent().siblings().html() == undefined ? replaceText($(element).parent().parent().siblings().html()) : ""
          if( element.attribs.dependentFieldSlave && (countryCode.toUpperCase() =='US' ||  countryCode.toUpperCase() =='UK')){
            element.attribs.errorMsg = "This field is required"
          }else{
            element.attribs.errorMsg = $(element)
            .parent()
            .parent()
            .parent()
            .parent()
            .find(".ppvx_text-input__error-text")
            .text();
          }
          
          
          element.attribs.errorMsg !== ""
            ? (element.attribs.required = true)
            : (element.attribs.required = false);
        });

        checkboxJson.add(element.attribs);
    });
  });
};

module.exports = {
  checkboxField,
};
