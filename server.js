const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "WalletMainnet Netlify API..." }));

app.use("/api/wallet", require("./routes/wallet"));

const PORT = process.env.PORT || 5000;

// set port 5001 on vercel
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
