import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>

          <div className="theme-container">
              <div className="flex">
                  <div className="gradient-bg">
                  </div>
                  {/*<div className="img-container">*/}
                  <img className='hero-bg' src="/images/hero-cover.1.jpg" alt="hero-img"/>
                  {/*</div>*/}
              </div>
              <div className="container">
                  <div className="navbar">
                      <div className="logo-container">
                          <h3>BrandName</h3>
                      </div>
                      <div className="nav-links">
                          <ul className='nav'>
                              <li>
                                  <a href="/home">Home</a>
                                  <a href="/home">product</a>
                                  <a href="/home">pricing</a>
                                  <a href="/home">contact</a>
                              </li>
                          </ul>
                          <ul className='btn-links'>
                              <li>
                                  <a href="/home">login</a>
                                  <div className="cta-member">
                                      <a href="/home" className='cta-link'>become a member</a>
                                      <img src="/images/icn%20arrow-right%20.icn-xs.png" alt="arrow-right"/>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div className="menu-btn">
                          <ul>
                              <li>
                                  <img src="/images/icn%20search%20.icn-xs.png" alt="search-icon"/>
                                  <img src="/images/icn%20shopping-cart%20.icn-xs.png" alt="cart-icon"/>
                                  <img src="/images/icn%20menu%20.icn-xs.png" alt="menu-icon"/>
                              </li>
                          </ul>
                      </div>

                  </div>
              </div>
          </div>
      </>
  )
}

export default App
