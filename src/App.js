import React from "react";
import Book from "./components/Book"
import "./AppDesign.css"

const App = () => {
    return (
      <div className="books">
        <Book
          imageSrc="https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._AC_SX368_.jpg"
          name="Atomic Habits"
          author="James Clear"
          description="This book will show your atomic habits"
        />
        <Book
          imageSrc="https://images-na.ssl-images-amazon.com/images/I/51h-N7R8QHL._AC_SX368_.jpg"
          name="Baby Animals"
          author="James Clear"
        />
        <Book
          imageSrc="https://images-na.ssl-images-amazon.com/images/I/51Ix49rxgtL._AC_SX368_.jpg"
          name="Goodnight Moon"
          author="James Clear"
        />
      </div>
    );
}


export default App