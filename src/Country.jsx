import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function Country({ countryname }) {
  const { data, isLoading } = useQuery({
    queryKey: ['country'],
    queryFn: () =>
      axios
        .get(`https://mrworld.azurewebsites.net/country/${countryname}`)
        .then((res) => res.data),
  })
  console.log(data)
  const { Code, Name, Continent, Population, Region } = data[0]
  return (
    <div>
      <h2>Country</h2>
      {isLoading && <div>...Loading</div>}
      {data && (
        <div>
          <p>code:{Code}</p>
          <p>name:{Name}</p>
          <p>contient:{Continent}</p>
          <p>pop:{Population}</p>
          <p>region:{Region}</p>
        </div>
      )}
    </div>
  )
}

Country.propTypes = {
  countryname: PropTypes.string.isRequired,
}
