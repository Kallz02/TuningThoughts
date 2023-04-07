import './Header.css'
import logo from '../assets/logo.png'
import { Outlet, Link } from "react-router-dom";
function Header(){

    const navLinks = document.querySelectorAll('.nav li a');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const checkbox = document.getElementById('nav-menu');
        checkbox.checked = false;
      });
    });  

    return(
        <header>
  <div className="logo">
 <img src={logo} alt="" /> 
    </div>
  <input type="checkbox" id="nav-menu" />
  <ul className="nav">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/testimonial">Testimonials</Link>
    </li>
    <li>
      
      <Link to="/Kit">Kit</Link>
    </li>
    <li>
      
      <Link to="/Classes">Classes</Link>
    </li>
  </ul>
<Link to=''>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-youtube"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg></Link>
  <div className="contact">
    
      <Link to="/contact">Contact</Link>

  </div>
  <label htmlFor="nav-menu">
    <div className="navmenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 26 26"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-align-right"
      >
        <line x1={21} y1={10} x2={7} y2={10} />
        <line x1={21} y1={6} x2={3} y2={6} />
        <line x1={21} y1={14} x2={3} y2={14} />
        <line x1={21} y1={18} x2={7} y2={18} />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> 
    </div>
  </label>
</header>

    )

}

export default Header