import './App.css';
import React, {useState} from "react";
import Card from "./components/card";
import Form from "./components/form";


const App = () => {

    const [picture,setPicture] = useState([
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/197179243.jpg?k=0ec06b1a6dae5b0d9d4d4bbd02cf8e114fadb30e53ae069de4bceccb80e95faf&o=&hp=1',

    ]);
    const [colors,setColors] = useState('#90caf9');
    const [category, setCategory] = useState('travel');
    const [title,setTitle] = useState('ביידן הבטיח, רוסיה זעמה: כוחות צבא אמריקניים נחתו במזרח');
    const [description,setDescription] = useState('כשנתיים וחצי לאחר חיסול מנהיגו הקודם של דאעש, נשיא ארה"ב נשא הצהרה לאומה על הפשיטה הלילה של כוחות קומנדו בכפר במעוז המורדים בסוריה, שבה נהרג היורש אבו');
    const [author,setAuthor] = useState('אנתוני פינק');

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


