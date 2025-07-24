const fs = require("fs");
const path = require("path");

const replaceText = (text) => {
  if (text == null || text === '') {
    return;
  }
  return text
    .replace(/\t/g, "")
    .replace(/\n/g, "")
    .replace(/\r/g, "")
    .replace(/^\s+|\s+$/gm, ' ');
};

const writeFile = (jsonWriteData, UFID) => {
  // Resolve path to one level up and into `output` folder
  const outputPath = path.join(__dirname, "..", "output", `${UFID}-formProps.json`);

  // Ensure the directory exists
  fs.mkdir(path.dirname(outputPath), { recursive: true }, (dirErr) => {
    if (dirErr) {
      console.error("Error creating directory:", dirErr);
      return;
    }

    // Write the file
    fs.writeFile(
      outputPath,
      JSON.stringify(jsonWriteData, null, 2),
      function (err) {
        if (err) {
          console.log("Error writing file:", err);
        } else {
          console.log(`File written successfully to ${outputPath}`);
        }
      }
    );
  });
};

module.exports = {
  replaceText,
  writeFile,
};
