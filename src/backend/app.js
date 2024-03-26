require("dotenv").config();

const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const membersRouter = require("./API/members");
const teamsRouter = require("./API/teams");
const colorsRouter = require("./API/colors");
const timeoffRouter = require("./API/timeoff");

//The body function has changed after version 15 while I am using 16. If put request doesnt work then install bodyparser
//const bodyParser = require("body-parser");
//npm install --save body-parser


const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

// Serve the built client html
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(cors());

router.use("/members", membersRouter);
router.use("/teams", teamsRouter);
router.use("/colors", colorsRouter);
router.use("/timeoff", timeoffRouter);

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

// // for the frontend. 
// app.use("*", (req, res) => {
//   res.sendFile(path.join(`${buildPath}/index.html`));
// });


module.exports = app;
