import React , {useState} from 'react'
import '../App.css'

const initialValues = {
    username:"",
    email: "",
    password: ""
};

export default function SignUp() {
  const [values,setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    });
    console.log(values)
};

const submitInfo = (e) =>{
    // we submit sign up information in order to create an user in the backend
    console.log(1)
    const new_id = Math.floor(Math.random() * 100000) + 1
    fetch('/create_user' , {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        "user_id": new_id,
        "user_email": values.email,
        "user_name": values.username,
        "password": values.password
    })
    }).then(()=>{
    console.log('new user created')
    });
}

  return (
    <div className='SignUp'>
        <form>
                <label>
                    User Name:
                    <input type="text"
                    onChange = {handleInputChange}
                    value = {values.username}
                    name = "username"
                    />
                </label>
                <br></br>
                <label>
                    Email:
                    <input type="text"
                    onChange = {handleInputChange}
                    value = {values.email}
                    name = "email"
                    />
                </label>
                <br></br>
                <label>
                    Password:
                    <input type="text"
                    onChange = {handleInputChange}
                    value = {values.password}
                    name = "password"
                    />
                </label>
                <br></br>
                <input type="submit" 
                onClick={submitInfo}
                value="Submit" 
                />
            </form>
    </div>
  )
}
