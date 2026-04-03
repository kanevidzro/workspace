import Constants from "expo-constants";

/**
 * In development we point to the machine running the web app API.
 * In production set this to your deployed API origin.
 */
export const getBaseUrl = () => {
  const hostUri = Constants.expoConfig?.hostUri;
  const localhost = hostUri?.split(":")[0];

  if (!localhost) {
    throw new Error("Failed to resolve localhost. Set your production API URL here.");
  }

  return `http://${localhost}:3000`;
};
