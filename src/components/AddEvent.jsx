import React, {useState} from 'react'
import '../App.css';

const initialValues = {
    location: "",
    date: "",
    imgurl: "",
    courtName: "",
    peopleSize: "",
    skillLevel: "",
    currentPeople: "",
};


export default function AddEvent(props) {
    const [values, setValues] = useState(initialValues);
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values)
    };
    const submitInfo = (e) =>{
        console.log(1)
        const new_id = Math.floor(Math.random() * 10000) + 1
        fetch('/create_post' , {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "id": new_id,
            "courtName": values.courtName,
            "img_url": values.imgurl,
            "eventSize": values.peopleSize,
            "skillLevel": values.skillLevel,
            "location": values.location,
            "date": values.date,
            "currentPeople": values.currentPeople,
            "email": "example@gmail.com"
        })
        }).then(()=>{
        console.log('new entry created')
        });
    }

    return (
    <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>Start an event</h2>
              <button onClick={ ()=>{props.setEmodal(false);}} className="close-button">&times;</button>
            </header>
            <main className="modal__main">
           
            <form>
                <label>
                    Location:
                    <input type="text"
                    value={values.location}
                    onChange={handleInputChange}
                    name = "location"
                    label="Location"
                    />
                </label>
                <br></br>
                <label>
                    Date:
                    <input type="text"
                    value={values.date}
                    onChange={handleInputChange}
                    name = "date"
                    />
                </label>
                <br></br>
                <label>
                    Court Name:
                    <input type="text"
                    value={values.courtName}
                    onChange={handleInputChange}
                    name = "courtName"
                    />
                </label>
                <br></br>
                <label>
                    People size: 
                    <input type="text"
                    value={values.peopleSize}
                    onChange={handleInputChange}
                    name = "peopleSize"
                    />
                </label>
                <br></br>
                <label>
                    img link: 
                    <input type="text"
                    value={values.imgurl}
                    onChange={handleInputChange}
                    name = "imgurl"
                    />
                </label>
                <br></br>
                <label>
                    Skill Level: 
                    <input type="text"
                    value={values.skillLevel}
                    onChange={handleInputChange}
                    name = "skillLevel"
                    />
                </label>
                <br></br>
                <label>
                    Current People: 
                    <input type="text"
                    value={values.currentPeople}
                    onChange={handleInputChange}
                    name = "currentPeople"
                    />
                </label>

                    <br></br>
                    <input type="submit" 
                    value="Submit" 
                    onClick={submitInfo}
                    />
            </form>              
            </main>
          </div>
        </>
  )
}
