const { fetchDetailsByUfid, replaceText } = require("../utils/requiredFiles");

const getPardotUrl = (UFID, formHandler) => {
  // console.log(fetchDetailsByUfid(UFID))
  let getPardotUrl = fetchDetailsByUfid(UFID)["Existing Pardot URL"];
  if (getPardotUrl === undefined) return;
  formHandler.config.meta.actionUrl = "/webapps/mpp/rest/pardot/save-form-data";
  let createRedirectUrl = fetchDetailsByUfid(UFID)
    ["Return URL"].replace("\t", "")
    .split("/")
    .slice(4);
  let mppLinking = "";
  createRedirectUrl.forEach((val, ind) => {
    mppLinking += ind == 0 ? "/" + val + "/" : val + "/";
  });

  formHandler.config.meta.redirectUrl = mppLinking;
  formHandler.config.meta.formHandlerLocation =
    fetchDetailsByUfid(UFID)["Form Handler Location"] == undefined
      ? ""
      : fetchDetailsByUfid(UFID)["Form Handler Location"];
  formHandler.config.meta.formName =
    fetchDetailsByUfid(UFID)["Migrated - Form Handler Name"] === undefined
      ? ""
      : replaceText(fetchDetailsByUfid(UFID)["Migrated - Form Handler Name"]);

  return getPardotUrl;
};

module.exports = {
  getPardotUrl,
};
