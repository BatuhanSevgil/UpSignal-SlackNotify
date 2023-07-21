import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";
import { CronJob } from "cron";
import { trackerProcess } from "./modules/tracker/tracker.service";
import { sendMessage } from "./modules/slack/slack.service";
dotenv.config({ path: ".env" });

const slackToken = process.env.SLACK_BOT_TOKEN;
export const web = new WebClient(slackToken);

const cronSchedule = process.env.CRON_SCHEDULE;
sendMessage("Bot is up and running");
new CronJob(cronSchedule, async () => {
  await trackerProcess();
}).start();
