const {fetchDetailsByUfid} = require("../readPardotExcel");
const {renderInputTextFields} = require("../Fields/Render/renderInput");
const {renderSelectFields} = require("../Fields/Render/renderSelect");
const {renderCheckboxFields} = require("../Fields/Render/renderCheckBox");
const {renderTextAreaFields} = require("../Fields/Render/renderTextArea");
const {replaceText,writeFile} = require("../utils/utils");
const {inputField} = require("../Fields/inputField");
const {selectField} = require("../Fields/selectField");
const {checkboxField} = require("../Fields/checkboxField");
const {textAreaField} = require("../Fields/textAreaField");
const {submitBtn} = require("../Fields/submitButton");

module.exports = {
  fetchDetailsByUfid,
  renderInputTextFields,
  renderCheckboxFields,
  renderSelectFields,
  renderTextAreaFields,
  replaceText,writeFile,
  inputField,
  selectField,
  checkboxField,
  textAreaField,
  submitBtn,
};
