import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'

import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountriesApi = async () => {
      const countries = await fetchCountries()

      setCountries(countries)
    }
    fetchCountriesApi()
  }, [])

  return (
    <div>
      <FormControl>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value=''>United States</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default Countries
