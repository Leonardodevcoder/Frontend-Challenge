import axios from "axios";


const api = axios.create({
  baseURL: "https://api.thedogapi.com",
});

export const getDogs = async () => {
  const returnGet = (
    await api.get<never[]>(`/v1/breeds?limit=10&page=0`)
  )?.data;

  return returnGet;
};
