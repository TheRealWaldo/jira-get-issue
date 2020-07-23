import { getInput, setOutput, setFailed } from "@actions/core";
import { mkdirSync, appendFileSync } from "fs";
import { reverse } from "esrever";

const searchRegex = /\d+-[A-Z]+(?!-?[a-zA-Z]{1,10})/g;
const cliConfigDir = `${process.env.HOME}/.jira.d/`;
const configDir = `${process.env.HOME}/jira/`;

try {
  const searchString = getInput("search-string");
  console.log(`Searching ${searchString}`);

  const matches = (reverse(searchString) || "").match(searchRegex) || [];

  if (matches.length > 1) {
    throw new Error(
      "More than one Jira issue was identified, only one allowed."
    );
  }

  if (matches.length === 0) {
    throw new Error("No Jira issue was identified.");
  }

  const issueKey = reverse(matches[0]);
  console.log(`Found: ${issueKey}`);
  setOutput("issue-key", `${issueKey}`);

  console.log(
    `Creating Jira config.yml files at ${cliConfigDir} and ${configDir}`
  );
  try {
    mkdirSync(cliConfigDir, { recursive: true });
    mkdirSync(configDir, { recursive: true });
    appendFileSync(`${cliConfigDir}config.yml`, `issue: ${issueKey}\r\n`);
    appendFileSync(`${configDir}config.yml`, `issue: ${issueKey}\r\n`);
  } catch (error) {
    setFailed(error.message);
  }
} catch (error) {
  setFailed(error.message);
}
