import './App.css';
import React, {useState} from "react";
import Card from "./components/card";
import Form from "./components/form";
import {
    defaultAuthor,
    defaultCategory,
    defaultColor,
    defaultDescription,
    defaultPicture,
    defaultTitle
} from "./constants/defaults";


const App = () => {
    const [picture,setPicture] = useState([defaultPicture]);
    const [colors,setColors] = useState(defaultColor);
    const [category, setCategory] = useState(defaultCategory);
    const [title,setTitle] = useState(defaultTitle);
    const [description,setDescription] = useState(defaultDescription);
    const [author,setAuthor] = useState(defaultAuthor);

  return (
              <div className="app">
                  <Card
                      className="right"
                      picture={picture}
                      colors={colors}
                      category={category}
                      title={title}
                      description={description}
                      author={author}
                  />
                  <Form
                      className="left"
                      colors={colors}
                      setColors={setColors}
                      setCategory={setCategory}
                      setTitle={setTitle}
                      setDescription={setDescription}
                      setAuthor={setAuthor}
                      setPicture={setPicture}
                      picture={picture}
                  />
              </div>
  );
}

export default App;


