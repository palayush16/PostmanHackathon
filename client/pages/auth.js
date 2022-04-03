import React , { useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import imgl2 from '../public/images/l2.jpeg'
import imgl1 from '../public/images/l1.jpeg'
import Link from 'next/link'

const auth = () => {

    const [isActive,setActive]=useState("true");

    const toggleForm=()=>{
        setActive(!isActive);
        
    };

  return (
    <div>
            <Navbar/>
            <section>
            <div className={`container ${isActive ? "active" : ""}`}>
                
                <div className="user signinBx">
                    <div className="imgBx"></div>
                    <div className="formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Username"/>
                            <input type="password" name="" placeholder="Password"/>
                            <Link href="/respage"><input type="submit" name="" value="Login"/></Link>
                            <p className="signup">Don't have a account?<a href="#" onClick={toggleForm}>Sign Up</a></p>
                        </form>
                    </div>
                </div>

                <div className="user signupBx">
                    
                    <div className="formBx">
                        <form>
                            <h2>Create an Account</h2>
                            <input type="text" name="" placeholder="Username"/>
                            <input type="email" name="" placeholder="Email Address"/>
                            <input type="password" name="" placeholder="Password"/>
                            <Link href="/respage"><input type="submit" name="" value="Signup"/></Link>
                            <p className="signup">Already have a account?<a href="#" onClick={toggleForm} >Sign In</a></p>
                        </form>
                    </div>
                    <div className="imgBx"></div>
                </div>
            </div>
        </section>
                 
        </div>
  )
}

export default auth