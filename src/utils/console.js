import chalk from "chalk";
import dayjs from "dayjs";

export const actionF = chalk.bold.cyan;
export const errorF = chalk.bold.red;
export const normalF = chalk.bold.green;
export const restrictF = chalk.bold.yellow;

export const consoleTime = () => {
  return dayjs().format("|DD-MM-YY|hh:mm:ss");
};
