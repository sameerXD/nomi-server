const express = require("express");
const app = express();
const mongoose = require("./database/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
// use req.body==>parsse req.body as json
app.use(express.json());

// Parse Cookie header and populate req.cookies
app.use(cookieParser());

require("dotenv").config();
app.use("/", require("./routes/test"));
app.use("/api/", require("./routes/home"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
