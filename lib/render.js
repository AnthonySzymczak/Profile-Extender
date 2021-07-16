const fs = require("fs");
let renderHtml = require ('../template/template.js');
let path = "./index.html";

const writeFile = (managerArr, engineerArr, internArr) =>{
    fs.writeFile(path, renderHtml(managerArr, engineerArr, internArr), (err) => {
      if (err) {
        console.log(err.message);
        return;
      }else{
        console.log('Success')
      };
    });
  };
module.exports = { writeFile };