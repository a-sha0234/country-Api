import { React } from "react";
import Form from "./components/Form";

function App() {
  // const [apiData, setApiData] = useState(); //stores api data , important thing to note here is that we can an infinte loop so we use the useffect hook to stop this

  // const [isLoading, setIsLoading] = useState([]); //track if js is finished retrieving data

  // const [formData, setFormData] = useState({
  //   country: "",
  // });

  // const [country, setCountry] = useState();

  // useEffect(() => {
  //   fetch(`https://restcountries.com/v3.1/name/${country}`).then((result) => {
  //     // retrive api data
  //     return result.json().then((result) => {
  //       console.log(result);
  //       setApiData([
  //         result[0].capital,
  //         result[0].currencies,
  //         result[0].population,
  //         result[0].subregion,
  //         result[0].flags,
  //       ]);
  //     });
  //   });
  // }, []); //leaving dependacy array empty causes it to only render once

  // useEffect(() => {
  //   // check  if api data is empty or not
  //   if (isLoading.length > 0) {
  //     setIsLoading(false);
  //   } else {
  //     setIsLoading(true);
  //   }
  // });

  // function handleChange(event) {
  //   //function to handle input from user
  //   const [name, value] = event.target;
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // }

  // function handleSubmit(e) {
  //   // starts the process of searching for data from api
  //   e.preventDefault();
  //   setCountry(formData.country);
  // }

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <input
          name="country"
          value={formData.country}
          type="text"
          placeholder="country"
          onChange={handleChange}
        ></input>

        <button>Submit</button>
      </form> */}
      <Form />
    </div>
  );
}

export default App;
