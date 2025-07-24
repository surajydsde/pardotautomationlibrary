const formHander = require("../../formHander");

const renderInputTextFields = (inputTextJson) => {
  (inputTextJson).forEach((item) => {
    let preset = () => {
      if (item.name == "firstname" || item.name == "lastname") return "name";
      if (item.name == "companyname") return "name";
      if (item.name == "phonenumber") return "phone";
      if (item.name == "companywebsite") return "url";
      if (item.name == "workemail") return "email";
      if (item.name == "countrycode") return "number";
      if (item.name == "jobtitle") return "text";
      if (item.name == "industry") return "text";
      if (item.name == "totalonlinevolume") return "number";
    };

    let validations = {};

    if(item.name == "phonenumber"){
       validations = {
        required: Boolean(item.required),
      }
    }else{
       validations = {
        required: Boolean(item.required),
        maxLength: Number(item.maxlength),
      }
    }

    formHandler.content.fields.push({
      config: {
        id: `${item.name}`,
        name: `${item.name}`,
        preset: preset(),
        validations
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
  renderInputTextFields,
};
