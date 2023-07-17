import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: process.env.APP_URL,
  },
});
