module.exports = {
  textAreaField: ($, jsonAlias, textAreaJson) => {
    $("textarea").each((index, element) => {
      const getName = $(element).parent().attr("class");
      getName?.split(" ").map((name, index) => {
          const getfinalData = jsonAlias.filter((item, index) => {
            return item.alias.includes(name);
          });
          getfinalData.map((item) => {
            element.attribs.name = item.name;
            element.attribs.class = name;
            element.attribs.label = $(element).parent().find("label").text();
            element.attribs.maxlength = element.attribs.maxlength;
            element.attribs.errorMsg = $(element)
              .parent()
              .parent()
              .find(".ppvx_text-input__error-text")
              .text();
            element.attribs.errorMsg !== ""
              ? (element.attribs.required = true)
              : (element.attribs.required = false);
          });
          textAreaJson.push(element.attribs);
      });
    });
  },
};
