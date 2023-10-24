import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-cintent-center' style={{width:'100%',height:'300px'}}>
    <div className="footer d-flex justify-content-evenly w-100">
        <div style={{width:'400px'}} className="website">
            <h4>
            <i className="fa-solid fa-cloud-arrow-up "></i>
       {' '}
        E-cart
            </h4>
            <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
<h6>Code licensed MIT, docs CC BY 3.0.</h6>
<p>Currently v5.3.2.</p>
        </div>
  <div className="links d-flex flex-column">
    <h4>Links</h4>
    <Link to={'/'} style={{textDecoration:'none',color:'blue'}}> Home</Link>
    <Link to={'/cart'} style={{textDecoration:'none',color:'blue'}}>Cart</Link>
    <Link to={'/wishlist'} style={{textDecoration:'none',color:'blue'}}> Wishlist</Link>

  </div>
  <div className="guides d-flex flex-column">
    <h4>Guides</h4>
    <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'blue'}}> React</Link>
    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'blue'}}> React Bootstrap</Link>
    <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'blue'}}> Routing</Link>

  </div>
    </div>
    <p>All rights Reserved © E-cart © 2023</p>
</div>
  )
}

export default Footer