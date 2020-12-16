import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let changeableUrl = url

  if (country) {
    changeableUrl = `${url}/countries/${country}`
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl)

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    }
  } catch (error) {
    return error
}
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    )

    // console.log('raw data', data)

    const modifiedData = data.map(
      ({ positive, recovered, death, dateChecked }) => ({
        confirmed: positive,
        recovered,
        deaths: death,
        dateChecked,
      })
    )
    // console.log('modified data', modifiedData)
    return modifiedData
  } catch (error) {
    return error
  }
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`)

    const modifiedData = countries.map((country) => country.name)

    // console.log(modifiedData)
    return modifiedData
  } catch (error) {
    console.log(error)
  }
}
