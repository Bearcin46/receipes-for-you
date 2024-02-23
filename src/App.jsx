import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Table from "./components/Table";
import "./index.css";
import { useState } from "react";
import image from "./assets/main.jpg";

function App() {
  const [recipes, setrecipes] = useState([]);
  const addrecipe = (recipe) => {
    setrecipes(recipe);
  };

  return (
    <div>
      <Header />
      <div className="flex gap-10  bg-[#985441]">
        <img src={image} alt="" className="max-w-3xl  mt-10 max-h-screen" />
        <MainContent onAddingrecipe={addrecipe} />
      </div>
      <div className=" bg-[#cc8071] py-20 px-11">
        <Table recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
