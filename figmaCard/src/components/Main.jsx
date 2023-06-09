//Main section
import displayImage  from '../assets/wade8.png';

export default function Main() {
    
    function greet(){
        const hour = new Date().getHours();
        const greeting =
          hour < 12 ? "Good morning!" : hour < 18 ? "Good afternoon!" : "Good evening!";
        return greeting;      
    }

    return(
        <div>
            <div className='md:hidden lg:inline-block -mx-10 mt-28 bg-teal-900 box'>
                <div className='content bg-teal-900'>
                    <div><img src={displayImage} alt="profile-pic" className='box-image object-cover h-[60rem] w-[20rem] mt-60 '/></div>
                    <div className='content-text'>
                        <h3 className='text-teal-400 tracking-tight uppercase'>
                            <span className=' text-[#FFC165] pr-1'>{greet()}</span>
                            Alien, nice to meet you.<br/>
                            <span className='px-6'>lets create something awesome</span>
                        </h3>
                        <p className='text-center '><a href='#' className='text-[#FFC165] uppercase font-bold underline'>Contact Wade</a></p>
                    </div>     
                </div>
            </div>
            <div className='md:hidden  hero-text bg-teal-900'>
                <h3 className="name text-teal-400 text-5xl text-center tracking-wider mt-4">Walshwade</h3>
                <h3 className="name2 text-teal-400 text-4xl text-center tracking-normal mt-0">chokwe</h3>
                <h3 className="text-xl text-teal-600 font-sans  text-center  mt-0">Fullstack developer</h3>
            </div>


            <div className="hero-large-text hidden md:block lg:text-[1.5rem] text-teal-100 ml-16">
                <h3><span className='lg:text-[2rem]/10 text-[#FFC165]'>{greet()}</span> alien, nice to meet you.<br/> This is</h3>
                <h1 className='lg:text-[3rem]/10 font-bold'>Walshwade Chokwe</h1>
                <h3>Am your <span className='lg:text-[2rem]/10 text-[#FFC165]'>Frontend Developer</span></h3>
                <div className=' font-mono text-sm mt-10'>

                    <span className='setup'>Why do programmers prefer dark mode? <i className="fa-solid fa-face-surprise fa-beat"></i></span>
                    <span className='punchline text-[#FFC165]'> Because light attracts bugs!<i className="fa-solid fa-face-laugh-squint fa-shake"></i></span>
                </div>
                
            </div>


            <div>
                <div className='md:hidden arrow-down'></div>


                <div className='hidden md:inline'>
                    <a href="#">
                        <div id="mouse-scroll">
                            <div className="mouse">
                                <div className="mouse-in"></div>
                            </div>
                            <div>
                                <span className="down-arrow-1"></span>
                                <span className="down-arrow-2"></span>
                                <span className="down-arrow-3"></span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}