import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import Menu from "../src/Menu";

const app = express();

//express.static is a express middleware that serves static files
//and to subscribe to express middleware, we use app.use()
app.use(express.static("../../build"));

app.get("/*", (req, res) => {
  //renders our app as a string
  const reactApp = ReactDOMServer.renderToString(<Menu />);
  const indexFile = path.resolve("./build/index.html");
  const readIndexFile = async () => {
    try {
      const readHTML = (await fs.readFile(indexFile, "utf8")).replace(
        `<div id="root"></div>`,
        `<div id="root">${reactApp}</div>`
      );
      res.send(readHTML);
    } catch (e) {
      console.error(e);
    }
  };

  readIndexFile();
});

//the port is stored in process.env.PORT in our DEV envionrment, but if not then it's 4000
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`file is served up on PORT ${PORT}`));
