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
                <p>asdjkdhjkshd asjdhaskj dhjsadh ajshdk ashdjsahd hausdh sahd sjd asdkjh sdhas jd
                    asdjhksadhjsd sdhjkashdjaksdhh d skdaksldjiwj dsndsn kasjdh sjdhaskjhd la dkjs 
                    asdkjskd jskjd asjdk sdkjskd jkjsdk s dsdk lskskld lskd sd;ks d;ks'ks;kdls d
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