import axios from "axios";

export const fetchBatteryData = async () => {
  const response = await axios.get(import.meta.env.VITE_BATTERY_API_URL);
  return response.data.data;
};
