import react from 'react'

function Header (){
    return(
        <header className ="header">
      <div className= "wrapper">
        <div  className ="header-grid">
          </div>
          <h1>social media desboard</h1>
          <p className ="header-total">total de followers: 23, 004</p>
          </div>
          <div className="dark-mode">
          <p className ="dark-mode">dark Mode</p>
          <input type="checkbox" className="checkbox" id="checkbox"/>
          <label className="switch" htmlFor ="checkbox">

          </label>
      
          </div>

        </header>
    );


}

export default Header ;
