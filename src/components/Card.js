import { React, useState, useEffect } from "react";

export default function Card(props) {
  const [apiData, setApiData] = useState([]); //stores api data , important thing to note here is that we can an infinte loop so we use the useffect hook to stop this

  const [isLoading, setIsLoading] = useState(true); //track if js is finished retrieving data

  const [error, setError] = useState(null); // state to error message

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${props.country}`).then(
      (result) => {
        if (!result.ok) {
          //check if response is not ok which will fire this block if its not,
          // *have to do this after the first .then() after the fetch
          throw Error("could not catch data for that resource"); // this error will show up if the promise is not ok
        }
        // retrive api data
        return result
          .json()
          .then((result) => {
            setApiData([
              result[0].capital,
              result[0].currencies,
              result[0].population,
              result[0].subregion,
              result[0].flags,
            ]);
          })
          .catch((err) => {
            //catch anu network error if cant connect to server
            setError(err.message); // set it to the state
          });
      }
    );
  }, [props.country]);

  //leaving dependacy array empty causes it to only render once,
  // however here we need the depandancy to be the country, so whenever the country
  // changes so the useffect re renders

  useEffect(() => {
    // check  if api data is empty or not
    if (apiData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [apiData]);

  //   console.log(apiData);

  return (
    <div>
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      {isLoading == false && error != null && (
        <main className="Card">
          <img
            src={apiData[4].png}
            alt="Girl in a jacket"
            width="200"
            height="200"
          ></img>
          <div className="card__top">
            <h2> {apiData[0]}</h2>
          </div>
          <div className="card__bottom">
            <h3>{apiData[3]}</h3>
          </div>
        </main>
      )}
    </div>
  );
}
