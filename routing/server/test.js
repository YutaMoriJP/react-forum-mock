const fs = require("fs").promises;
const path = require("path");

const readBuildFile = async () => {
  try {
    const app = "HELLO WORLD!!!!!!!!";
    const indexFile = path.resolve("./build/index.html");
    const readIndex = (await fs.readFile(indexFile, "utf8")).replace(
      `<div id="root"></div>`,
      `<div id="root">${app}</div>`
    );
    console.log(readIndex);
  } catch (e) {
    console.error(e);
  }
};

console.log(readBuildFile());
