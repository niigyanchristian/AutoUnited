import Constants from "expo-constants";

const settings = {
  dev: {
    // apiUrl: "http://192.168.43.7:3000/api",
    apiUrl: "https://autounited.azurewebsites.net/api/v1/",
  },
  staging: {
    apiUrl: "https://barbershop-k337.onrender.com/api",
  },
  prod: {
    apiUrl: "https://barbershop-k337.onrender.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
