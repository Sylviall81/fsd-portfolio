import React from 'react'

export default function RegisterForm() {
  return (
    <div>

        <h3>Register Form</h3>
            <form action="POST">
               
            <label htmlFor="name">Name</label>
                <input type="text" />

                <label htmlFor="email">Email</label>
                <input placeholder= "admin-user@example.com" type="email" name="email" id="" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />

            <button type="submit">Register</button>
        </form>


    </div>
  )
}
