import React from 'react'

import Link from 'next/link'

const LandingComp = () => {
  return (
    <div className="container">
    <div className="landingComp">
        <div className="liner">
            
            <h1>Out of the Closets and into the Streets</h1>
            <h2>#LoveIsLove</h2>
        </div>
        <div className="logger">
            <h2>Become Member of our Social Community</h2>
            <Link  href="/auth" ><h3>Login</h3></Link>
        </div>
    </div>
    </div>
  )
}

export default LandingComp