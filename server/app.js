// This entire server can be established using Apollo library which is a better way to build a GraphQL API - https://www.npmjs.com/package/@apollo/server
const express = require("express");

const app = express();
const PORT = 6000;

app.listen(PORT,() => {
    console.log(`Server running at port ${PORT}`)
})