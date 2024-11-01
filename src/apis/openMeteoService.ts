const callAPI = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

const getLocationsFromSearch = async (
  searchQuery: string,
  resultCount: number = 5,
) => {
  const apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=${resultCount}&language=en&format=json`
  const data = await callAPI(apiUrl)
  return data
}

const getForecastFromLocation = async (latitude: number, longitude: number) => {
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m`
  const data = await callAPI(apiUrl)
  return data
}

export { getLocationsFromSearch, getForecastFromLocation }
