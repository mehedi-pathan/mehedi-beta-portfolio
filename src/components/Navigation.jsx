import React from 'react';
import content from "../content";

function Navigation() {
  
  return (
    <div style= {{
      background: '#232321',
    }} className="font-dosis fixed top-0 w-screen z-40">
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-yellow-100 font-dosis">
        <h1 className="text-3xl font-bold">{content.nav.logo} <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span> </h1>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <span key={index} className="text-xl mr-4">
                {link.text}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navigation