import React, { useState, useEffect} from 'react';import './form.css';const Form = ({setCategory,setTitle,setDescription,setAuthor,setPicture,setColors,picture}) => {    const hebOptions = [        {            heb:'אדום',            eng:'Red'        },{            heb:'כחול',            eng:'Blue'        },{            heb:'ירוק',            eng:'Green'        },{            heb:'סגול',            eng:'Purple'        }];    const [selectedFile, setSelectedFile] = useState();    const handleChange = event => {        event.preventDefault();        setColors(event.target.value)    };    const handlePicture = event => {        setSelectedFile(event.target.files[0]);    };    useEffect(()=>{        if(selectedFile){            setPicture((prevState)=>[...prevState,URL.createObjectURL(selectedFile)])        }    },[selectedFile,setPicture]);    const handleRemove = event => {        const name = event.target.getAttribute('name');        setPicture(picture.filter(item => item !== name));    };    return (        <form className="form" onSubmit={event => event.preventDefault()}>            <div>                תמונות                {picture && picture.map(p=>(                    <div className="pictureGallery" key={p}>                        <input type="text" value={p} readOnly/>                        <button onClick={handleRemove} name={p}>מחק</button>                    </div>                ))}            </div>            <div                className="addMore"            >                <input                    type="file"                    accept="image/*"                    onChange={handlePicture}                />                <span>                    הוסף תמונה                </span>            </div>            <div className="coloredCategoryName">                <label htmlFor="color">צבע רקע</label>                <select name="color" id="color" onChange={handleChange}>                    <option>בבקשה תבחר צבע</option>                    {hebOptions.length >0 && hebOptions.map(c => (                        <option key={c.eng} value={c.eng}>                            {c.heb}                        </option>                    ))}                </select>                <label htmlFor="category">שם קטגוריה</label>                <input                    type="text"                    id="category"                    maxLength="45"                    onChange={e=> setCategory(e.target.value)}                />            </div>            <label htmlFor="title">כותרת</label>            <textarea                name="title"                id="title"                rows={2}                maxLength="55"                onChange={e=> setTitle(e.target.value)}            />            <label htmlFor="description">כותרת משנה</label>            <textarea                id="description"                rows={3}                maxLength="155"                onChange={e=>setDescription(e.target.value)}            />            <div>                <label htmlFor="authorName">שם מחבר</label>                <input                    name="authorName"                    type="text"                     maxLength="45"                    onChange={e=> setAuthor(e.target.value)}                />            </div>        </form>    );};export default Form;