const xlsx = require("xlsx");

const fetchDetailsByUfid = (UFID) => {
  const workbook = xlsx.readFile("./pd.xlsx");
  let workbook_sheet = workbook.SheetNames;
  let workbook_response = xlsx.utils.sheet_to_json(
    workbook.Sheets[workbook_sheet[3]]
  );


  const matcData = workbook_response.filter((item, index) => {
    return item.UFID == UFID;
  });
  
  if(matcData == ''){
    return "no data found with this form id"
  }else{
    return matcData[0]
  }
  
};

module.exports = {
  fetchDetailsByUfid,
};
