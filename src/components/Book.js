import React, {useState} from "react";



import Description from "./Description"

const Book = ({ name, author, imageSrc, description }) => {

  const [showDescription, setShowDescription] = useState(false)

  return (
    <div>
      <img src={imageSrc} alt="" width="60" onClick={() => setShowDescription(true)}/>
      <h4>Book name: {name}</h4>
      <h5>Author: {author}</h5>

      {showDescription == true ? 
      <Description description={description}/> 
      : null}
      
    </div>
  );
};

export default Book