import React , {useState} from 'react'
import '../App.css'
import  { Navigate } from 'react-router-dom'


const initialValues = {
    email: "",
    password: ""
};

export default function Login(props) {
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
    e.preventDefault();
    try{
      fetch('/login' , {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          "user_email": values.email,
          "password": values.password
      })
      }).then(
        res => res.json()
      ).then(
        msg =>{
         if(msg['ifLogedIn']){
          props.setLogin(true)
         }else{
          props.setLogin(false)
         }
        }
      )
    } catch(error){
      console.log(error)
    }
    
    
}

  return (
    <div className='SignUp'>
        <form>
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
