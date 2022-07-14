import React from 'react'
import '../App.css'


export default function Login() {
  return (
    <div className='login'>
        <form>
            <label>
                Account
                <br/>
            <input type="text" name="name" />
            <br/>
                Password
                <br/>
            <input type="text" name="Password" />
            </label>
            <input type="submit" value="Login" />
</form>
    </div>
  )
}
