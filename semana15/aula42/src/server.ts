import express, { request } from 'express';
import cors from 'cors';
import { countries } from './countries';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/countries/all', (request, response) => {
  return response.json(countries.map(({name, id}) => ({id, name})));
})

app.get('/countries/search', (request, response) => {
  const queryName = request.query.name ? String(request.query.name) : '';
  const queryContinent = request.query.continent ? String(request.query.continent) : '';

  if (queryName || queryContinent) {
    const filteredCountries = countries
      .filter(country => (
        country.name.toLowerCase().includes(queryName.toLowerCase())
      ))
      .filter(country => (
        country.continent.toLowerCase().includes(queryContinent.toLowerCase())
      ))
  
    return filteredCountries.length > 0 
      ? response.json(filteredCountries)
      : response.status(404).json({ message: 'NO_SUCH_COUNTRIES'});
  }

  return response.status(400).json({ message: "NO_QUERY_PARAMS"})
})

app.get('/countries/:id', (request, response) => {
  const country = countries.find(country => country.id === Number(request.params.id));
  
  return country ? response.json(country) : response.status(404).json({ message: "NO_SUCH_COUNTRY" });
})

app.put('/countries/edit/:id', (request, response) => {
  const country = countries.find(country => country.id === Number(request.params.id));

  if (!country) {
    return response.status(404).json({ message: 'NO_SUCH_COUNTRY' })
  }

  const { name, capital } = request.body

  country.name = name ? name : country.name
  country.capital = capital ? capital : country.capital

  return response.status(202).json(country)
})

app.delete('/countries/:id', (request, response) => {
  const authorization = request.headers.authorization
  if (!authorization || authorization.length < 10) {
    return response.sendStatus(401);
  }

  const countryIndex = countries.findIndex(country => country.id === Number(request.params.id));

  if(countryIndex < 0) {
    return response.status(404).json({ message: 'NO_SUCH_COUNTRY'})
  }

  countries.splice(countryIndex, 1)

  return response.sendStatus(200)
})

app.post('/countries/create', (request, response) => {
  const authorization = request.headers.authorization
  if(!authorization || authorization.length < 10) {
    return response.sendStatus(401)
  }

  const {
    name,
    capital,
    continent
  } = request.body

  if (!name || !capital || !continent) {
    return response.sendStatus(400)
  }

  if (countries.some(country => name === country.name)) {
    return response.status(400).json({ message: "ALREADY_EXISTS"})
  }

  const country = {
    id: countries.length,
    name,
    capital,
    continent
  }

  countries.push(country)

  return response.status(200).json({ message: "success", country});
})

app.listen(3333, function () {
  console.log('CORS-enabled web server listening on port 3333')
})