import { React, useState } from "react";
import Card from "./Card";

export default function Form() {
  const [formData, setFormData] = useState({
    country: "",
  });

  const [country, setCountry] = useState();

  function handleChange(event) {
    //function to handle input from user
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    // starts the process of searching for data from api
    e.preventDefault();
    setCountry(formData.country);
  }

  //   function handleSubmitButton() {
  //     setIsSubmit((prev) => {
  //       return !prev;
  //     });
  //   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="country"
          value={formData.country}
          type="text"
          placeholder="country"
          onChange={handleChange}
        ></input>

        <button>Submit</button>
      </form>
      <section className="CardContainer">
        {country && <Card country={country} />}
      </section>
    </div>
  );
}
