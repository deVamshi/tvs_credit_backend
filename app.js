import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3000;
import { getClientIp } from "request-ip";
import axios from "axios";
import { sampleDeviceToken } from "./constants.js";
import { sendNotif } from "./firebase_funcs.js";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = "3d112334953544798eb83aa2130d5d6b";
const URL = "https://ipgeolocation.abstractapi.com/v1/?api_key=" + API_KEY;

const sendAPIRequest = async (ipAddress) => {
  const apiResponse = await get(URL + "&ip_address=" + ipAddress);
  return apiResponse.data;
};

app.get("/", async (req, res) => {
  const ipAddress = getClientIp(req);
  const ipAddressInformation = await sendAPIRequest(ipAddress);
  console.log("Request made");
  res.send(ipAddressInformation);
  //   res.send(ipAddress);
});

app.post("/sendNotif", async (req, res) => {
  console.log(sampleDeviceToken);
  sendNotif(sampleDeviceToken);
  // sendNotif(sampleDeviceToken);
  res.send("OK");
});

app.listen(port, () => {
  console.log(port);
  console.log(`Example app listening on port ${port}`);
});
