const fs = require("fs");

const writeFile = (renderHtml) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./index.html", renderHtml, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Congratulations! You've written to the HTML",
      });
    });
  });
};

module.exports = { writeFile };