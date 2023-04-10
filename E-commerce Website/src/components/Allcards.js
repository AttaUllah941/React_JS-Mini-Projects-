import React from 'react' ;
import '../Assets/css/allcards.css' ;

function Allcards({children}) {
  return (
    <div>
    <div>
        {children}
    </div>
    </div>
  )
}

export default Allcards ;