import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
  };
  
  useEffect(() => {
    fetchDetails();
    
  }, [params.id]);

  
  console.log(details);
  return (
    <div className="detail-wrapper">
      <div>
        <h2>{details.title}</h2>

        <img src={details.image} alt={details.title} />
      </div>
      <div className="info">
        <button
          onClick={() => setActiveTab("Instructions")}
          className={`button  ${activeTab === "Instructions" ? "active" : ""}`}
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab("Ingredients")}
          className={`button  ${activeTab === "Ingredients" ? "active" : ""}`}
        >
          Ingredients
        </button>
        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        <div>
          {/* <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li>{ingredient.original}</li>;
            })}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
