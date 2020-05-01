import { apiservice } from "../../../environment/service.configuration";

export const counterAPIService = {
  getRandomInteger: () => {
    return apiservice.get(
      "?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
    );
  },
};
