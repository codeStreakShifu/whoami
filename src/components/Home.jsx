import './styles.css';
import myimg from '../images/dev-img.jpg'
import logo from '../components/logo.png'

function Home (){
  // TODO document why this function 'Home' is empty
  return(
    <div>
    
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

    <section className="home" id="home">


        <div className="padding"></div>
            <div className="home-content">
                <h1>Hi, I'm <span>Joseph</span></h1>
                <h3 className="text-animation">I'm an aspiring <span></span></h3>
                <p>"With 6 months of hands-on experience in both graphic design and development, I specialize in crafting visually appealing designs while building functional and user-friendly websites. My goal is to merge creativity with technology, delivering innovative and high-quality solutions tailored to your needs."
                </p>

                <div className="social-icons">
                    <a href="#aaa"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://github.com/codeStreakShifu"><i className='bx bxl-github'></i></a>
                    <a href="https://www.facebook.com/mastershifuRedoLife/"><i className='bx bxl-facebook' ></i></a>
                    <a href="https://www.instagram.com/"><i className='bx bxl-instagram' ></i></a>
                </div>

                <div className="btn-group">
                    <a href="#assas" className="btn">Projects</a>
                    <a href="#contact" className="btn">Contact</a>
                </div>
            </div>

                <div className="profile-image">
                    <img src={myimg} alt=""/>
                </div>
            

        </section>

        </div>
    
  );

}



export default Home;