const cheerio = require("cheerio");
const axios = require("axios");
const getJson = require("./checkInputs.json");
let formHandler = require("./formHander");
const formID = process.argv ? process.argv[2] : "";
const {
  renderInputTextFields,
  renderCheckboxFields,
  renderSelectFields,
  renderTextAreaFields,
  replaceText,
  writeFile,
  inputField,
  selectField,
  checkboxField,
  textAreaField,
  submitBtn,
  fetchDetailsByUfid,
} = require("./utils/requiredFiles");
const { getPardotUrl } = require("./Fields/pardotDetails");
const { whatDoYou } = require("./Fields/radiobuttonDependentField");

const jsonAlias = [];
let inputTextJson = new Set();
let selectJson = new Set();
let checkboxJson = new Set();
let radioJson = new Set();
let textAreaJson = [];
let dependentField = new Set();

const generateParadotJson = async (UFID) => {
  try {
    if (UFID === undefined) {
      throw "UFID is undefined";
    }

    const checkIsFormID = UFID.includes("FHMPP");
    if (!checkIsFormID) return;

    const pardotUrl = getPardotUrl(UFID, formHandler);
    if (pardotUrl == "" || pardotUrl === undefined) {
      console.log("Existing Pardot Url not Found");
    } else {
      const axiosResponse = await axios.request({
        method: "POST",
        url: pardotUrl,
      });

      const $ = cheerio.load(axiosResponse.data);
      getJson.Fields.map((item) => {
        jsonAlias.push(item);
      });

      //Get all the dependent Field
      const getDependentFieldSlave = $(".form-field-secondary");
      $(getDependentFieldSlave).each(function (inx, element) {
        const classN = $(element).attr("class");
        classN?.split(" ").map((name, index) => {
          const getfinalData = jsonAlias.filter((item, index) => {
            return item.alias.includes(name);
          });

          getfinalData.map((item) => {
            dependentField.add(item);
          });
        });
      });

      if ($("html").find(".*-sm-12.*-md-12")) formHandler.config.columns = 1;
      if ($("html").find(".*-sm-12.*-md-6")) formHandler.config.columns = 2;

      const sectionParagraph = $("html form > p").html();
      sectionParagraph == "" || sectionParagraph == null
        ? ""
        : sectionParagraph.includes("label")
        ? ""
        : (formHandler.section.content.paragraph.text =
            replaceText(sectionParagraph));
      const countryCode =
        fetchDetailsByUfid(UFID)["Page Live Link"].split("/")[3];

      formHandler.content.hatchText = replaceText(
        $("html").find(".text-xs-center").html()
      );

      inputField($, jsonAlias, inputTextJson);
      selectField($, jsonAlias, selectJson, dependentField, countryCode);
      textAreaField($, jsonAlias, textAreaJson);
      checkboxField($, jsonAlias, dependentField, checkboxJson, countryCode);
      renderInputTextFields(inputTextJson);
      renderSelectFields(selectJson);
      whatDoYou($, jsonAlias, radioJson, countryCode);
      renderCheckboxFields(checkboxJson);
      renderTextAreaFields(textAreaJson);
      const formProps = submitBtn($, formHandler);
      writeFile(formProps, UFID);
    }
  } catch (err) {
    console.log(err);
  }
};

generateParadotJson(formID);
