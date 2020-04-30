import { apiservice } from "../../../environment/service.configuration";

export const counterAPIService = {
  getRandomInteger: async () => {
    const response = await apiservice.get(
      "?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
    );
    return response;
  },
};
