import { apiKey } from "../../config/api-key";
import { useQuery } from "react-query";

export default function useLocationApi({ longitude, latitude }) {
  const { isLoading, error, data } = useQuery("repoData", (props) =>
    fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${Number(
        latitude
      )}&lon=${Number(longitude)}&apiKey=${apiKey.geoapify}`
    ).then((res) => res.json())
  );

  return { isLoading, error, data }; //{ isLoading, error, data }
}
