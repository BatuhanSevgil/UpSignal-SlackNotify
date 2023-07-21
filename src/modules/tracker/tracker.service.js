import axios from "axios";
import path from "path";
// import * as trackList from "../../../track-list.json";
import { prepairMessage, sendMessage } from "../slack/slack.service";

export function getTrackList() {
  const trackList = readJSONFile("../../../track-list.json");
  return trackList.list;
}

export async function trackerProcess() {
  const trackerList = getTrackList();

  const promises = trackerList.map(async (tracker) => {
    return healthCheker(tracker);
  });
  await Promise.all(promises);
}
export async function healthCheker(tracker) {
  const start = Date.now();
  let isHealthy;
  let end;
  let errorMessage;
  try {
    const healthCheckResponse = await axios.request({
      url: tracker.url,
      method: tracker.method,
      timeout: tracker?.timeout || 20000,
      ...(tracker.body ? { data: tracker.body } : {}),
    });

    isHealthy = healthCheckResponse.status === tracker.expectedStatus;
    end = Date.now() - start;
  } catch (error) {
    // Handle error here
    errorMessage = error;
    console.error(`Error occurred during health check: ${error}`);
    isHealthy = false;
    end = Date.now() - start;
  }

  if (tracker.notifyOnErrorOnly && isHealthy) {
    return;
  }

  const message = prepairMessage(tracker.id, { isHealthy, responseTime: end, errorMessage });

  const messageResult = await sendMessage(message);

  if (!messageResult.ok) {
    console.log("Something went wrong", messageResult?.error);
  }
}
import fs from "fs";

const readJSONFile = (filePath) => {
  try {
    const filePathFinal = path.resolve(__dirname, filePath);

    const jsonData = fs.readFileSync(filePathFinal, "utf-8");
    const parsedData = JSON.parse(jsonData);
    return parsedData;
  } catch (error) {
    console.error(`Error reading JSON file: ${error}`);
    return null;
  }
};
