import dotenv from "dotenv";
import { Environment } from "./environment.types";

dotenv.config();

export const environment: Environment = {

    application: {

        baseUrl:
            process.env.BASE_URL ??
            "https://front.serverest.dev",

    },

    execution: {

        headless:
            process.env.HEADLESS !== "false",

        timeout:
            Number(process.env.TIMEOUT ?? 30000),

        retries:
            Number(process.env.RETRIES ?? 0),

    },

    browser: {

        name:
            process.env.BROWSER ?? "chromium",

    },

};