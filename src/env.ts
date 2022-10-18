import { exit } from "process";
import { IEnv } from "./types";
import { IEnvironmentType } from "./types";
/**
 * we are only allowing 3 environments and return the 
 * related configs for each stored in environments folder.
 */
export const env = (): IEnv => {
  // explicit typecasting - parseInt() : js 
  const _environment:IEnvironmentType = <IEnvironmentType>process.env?.ENVIRONMENT || 'development';

  if (_environment === 'development') return require("./environment/dev.env"); // coding 
  else if (_environment === "production" || _environment === 'beta') return require("./environment/prod.env"); // production
  else if (_environment === "staging") return require("./environment/qa.env"); // staging or QA - Quality assessment/assurance!
  else {
    console.log(`
      Error. Shell variable ENVIRONMENT not set.
      Acceptable values are 'development' | 'production'
    `);
    exit(1); // we will kill the server!!
  }

};