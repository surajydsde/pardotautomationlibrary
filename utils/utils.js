const fs = require("fs");

const replaceText = (text) => {
  if(text==null || text == ''){
    return 
  }
  return text.replace(/\t/g, "").replace(/\n/g, "").replace(/\r/g, "").replace(/^\s+|\s+$/gm,' ');
};
const writeFile = (jsonWriteData,UFID) => {
  fs.writeFile(`${UFID}-formProps.json`
    ,
    JSON.stringify(jsonWriteData, null, 2),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
};

module.exports = {
  replaceText,
  writeFile,
};
