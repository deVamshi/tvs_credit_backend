const express = require("express");
const app = express();
const port = 3000;
const requestIP = require("request-ip");
const axios = require("axios");
const URL = "https://ipgeolocation.abstractapi.com/v1/?api_key=" + API_KEY;

const sendAPIRequest = async (ipAddress) => {
  const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
  return apiResponse.data;
};

app.get("/", async (req, res) => {
  const ipAddress = requestIP.getClientIp(req);
  const ipAddressInformation = await sendAPIRequest(ipAddress);
  console.log("Request made");
  res.send(ipAddressInformation);
  //   res.send(ipAddress);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
