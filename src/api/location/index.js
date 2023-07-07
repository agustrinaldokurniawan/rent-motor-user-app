import { apiKey } from "../../config/api-key"
import { useQuery } from 'react-query'
export default function useLocationApi(props) {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${Number(props.latitude)}&lon=${Number(props.longitude)}&apiKey=${apiKey.geoapify}`).then(res =>
      res.json()
    )
  )

  return { isLoading, error, data } //{ isLoading, error, data }
}