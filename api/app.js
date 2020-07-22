const express = require("express");
const app = express();
const cors = require("cors");
const enrollmentDAO = require("./models/enrollmentContext");

app.use(cors());
app.use(express.json());

enrollmentDAO.init(); // initialize cosmosdb database/containers

app.get("/api/enrollmentId", (req, res, next) => {
  enrollmentDAO.getEnrollmentId(req, res).catch(next);
});

app.post("/api/saveEnrollment", (req, res, next) => {
  enrollmentDAO.saveEnrollment(req, res).catch(next);
});

module.exports = app;
