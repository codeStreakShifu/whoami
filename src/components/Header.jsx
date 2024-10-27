import './styles.css';
import logo from '../components/logo.png'

function Header (){
  // TODO document why this function 'Header' is empty
    return(
        <header className="header">

            <img src={logo} className="logo-img" alt="logo" />
           {/* <a href="#home" class="logo">Joseph Niño
            <span>Amarillo</span></a> */}


            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#education">Education</a>
                <a href="#skills">Skill</a>
                <a href="#skills">Hobbies</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>


    );
    
}

export default Header;