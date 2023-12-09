import React from 'react'
import AdminPanelIcon from '../../assets/icons/diseno-web.png'

export default function SignInForm() {
  return (
    <>
   <div className= "">
        <div className= "">
          <img
            className=""
            src={AdminPanelIcon}
            alt="Developer Round Logo on purple and white "
          />
          <h2 className="">
            Welcome to your Admin Panel!
          </h2>
        </div>

        <div className="">
          <form className="" action="#" method="POST">

          <div>
            <label htmlFor="name" className="">
              Name
            </label>
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className=""
              />
            </div>
            </div>
            <div>
              <label htmlFor="email" className="">
                Email address
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=""
                />
              </div>
            </div>

            <div>
              <div className="">
                <label htmlFor="password" className="">
                  Password
                </label>
                {/*<div className="">
                  <a href="#" className="">
                    Forgot password?
                  </a>
                </div>*/}
              </div>
              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=""
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=""
              >
                Sign in
              </button>
            </div>
          </form>

         
        </div>
      </div>




    </>
  )
}

