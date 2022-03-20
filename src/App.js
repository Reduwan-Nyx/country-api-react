
import './App.css';
import Country from './components/Country/Country';


function App() {
  return (
    <div className="App">
     <Country></Country>
    </div>
  );
}
















// function LoadCountries(){
//   const [countries, setCountries] = useState([]);

//   useEffect( ()=>{
//     fetch(' https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])

//   return(
//     <div>
//       <h1>Visiting Every Country Of the World!!!</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} timezones={country.timezones}></Country>)
//       }
//     </div>
//   )
// }


// function Country(prop){
//   return (
//     <div>
//       <h2>Name: {prop.name}</h2>
//       <h4>Population: {prop.population}</h4>
//       <h3>Timezone: {prop.timezones}</h3>
//     </div>
//   )
// }


export default App;
