import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_HOST = import.meta.env.VITE_APP_API_HOST
// const API_HOST = "https://mr-countries-andrew.azurewebsites.net";
console.log(API_HOST)

export function Countries() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['countries'],
    queryFn: () => axios.get(`${API_HOST}`).then((res) => res.data),
  })

  return (
    <div className='p-8'>
      <h2 className='text-2xl font-bold'>All Countries</h2>
      <div className='mt-4'>
        {isFetching ? (
          <div className='text-blue-500'>Fetching...</div>
        ) : isPending ? (
          <div className='text-green-500'>Loading...</div>
        ) : error ? (
          <div className='text-red-500'>
            An error has occurred: {error.message}
          </div>
        ) : (
          <ul>
            {data &&
              data.map((country) => (
                <li key={country.Code}>
                  {console.log(country)}
                  {country.Name} - {country.Code}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  )
}
