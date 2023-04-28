import { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "ts-jest",

    globals: {
      "^.+\\.tsx?$": [
        "ts-jest",
        {
          babel: true,
          tsConfig: "./tsconfig.test.json",
        },
      ],
    },

    clearMocks: true,

    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
};
