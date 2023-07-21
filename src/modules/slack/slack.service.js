import { getTrackList } from "../tracker/tracker.service";
import { web } from "./../../app";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const channelName = process.env.SLACK_CHANNEL_NAME;

export async function sendMessage(text = "empty") {
  const result = await web.chat.postMessage({
    channel: channelName,
    text: "Hello world!",
    blocks: [{ type: "section", text: { type: "mrkdwn", text: text } }],
  });
  return result;
}

export function prepairMessage(id, details) {
  const { isHealthy, responseTime, errorMessage } = details;
  const track = getTrackList().find((tracker) => tracker.id === id);
  const icon = isHealthy ? ":large_green_square:" : ":large_red_square:";
  const statusText = isHealthy ? "System Is Up" : " System Is Down";

  const text = `:arrow_right: *Title:* ${track.title}
:arrow_right: *Status:* ${icon}  (${statusText})
:arrow_right: *Response Time:* ${responseTime}
:arrow_right: *Description:* ${track?.description || ""}
${errorMessage ? `:arrow_right: *Error Message:* ${errorMessage}` : ""}

`;

  return text;
}
