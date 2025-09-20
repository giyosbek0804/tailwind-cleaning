import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
  <>
    {/* header */}
    <header id="home">
      <nav className="flex items-center justify-between px-main pt-9 relative">
        <a href="./index.html" className="z-20">
          <img
            src="./src/images/logo.png"
            className="w-full md:w-[calc(5.5rem+5vw)]"
            alt="logo image"
          />
        </a>

        <ul className="z-10 flex flex-col lg:flex-row justify-center lg:justify-start absolute lg:relative w-full lg:w-fit h-screen lg:h-fit bg-darkGrey lg:bg-transparent text-black left-0 text-center text-[clamp(2rem,2.5vw,6rem)] lg:text-[clamp(1.1rem,1.2vw,4rem)] uppercase duration-300 top-[-100vh] lg:top-0 font-[350] lg:mr-10">
          <li className="relative overflow-hidden">
            <a href="./index.html">
              <p className="exit w-full">home</p>
              <p className="reveal w-full">home</p>
            </a>
          </li>

          <li className="relative overflow-hidden">
            <a href="./about.html">
              <p className="exit w-full">about</p>
              <p className="reveal w-full">about</p>
            </a>
          </li>

          <li className="relative overflow-hidden">
            <a href="#">
              <p className="exit w-full">services</p>
              <p className="reveal w-full">services</p>
            </a>
          </li>

          <li className="relative overflow-hidden">
            <a href="#">
              <p className="exit w-full">blog</p>
              <p className="reveal w-full">blog</p>
            </a>
          </li>

          <li className="relative overflow-hidden">
            <a href="#">
              <p className="exit w-full">contact</p>
              <p className="reveal w-full">contact</p>
            </a>
          </li>
        </ul>

        <div className="hamburger lg:hidden cursor-pointer z-20">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <section className="my-[calc(2.5rem+2vw)] flex items-center justify-center mx-[calc(1rem+1.5vw)] rounded-[70px] overflow-hidden relative">
        <div className="rounded-[50px] px-[calc(1.2rem+1vw)] lg:px-[calc(3rem+2.3vw)] py-[calc(1rem+1vw)] w-[90%] max-w-[max(50%,calc(20rem+17vw))] text-center flex flex-col items-center justify-center relative">
          <p className="uppercase flex justify-center items-center text-[clamp(.7rem,1vw,2.4rem)]">
            <img
              className="w-[calc(2rem+1.3vw)] md:w-[calc(1rem+1vw)] mr-[calc(1rem+.2vw)]"
              src="./src/images/spray.svg"
              alt=""
            />
            go-to Cleaners
          </p>

          <h1 className="uppercase font-light leading-tight text-[clamp(2.3rem,6.5vw,10rem)] my-[calc(.8rem+.6vw)] scale-up">
            about us
          </h1>

          <p className="text-[clamp(.8rem,.9vw,2.3rem)] font-[400] w-full sm:w-[90%] md:w-[58%] describe tracking-widest uppercase">
            we’re passionate about Delivering exceptional cleaning that go beyond expectations.
          </p>

          <a
            href="#explore"
            className="relative bg-white flip overflow-hidden uppercase cursor-pointer w-[min(80%,calc(6rem+6vw))] p-2 mt-[calc(1.5rem+1vw)] rounded-3xl text-[clamp(1rem,1.3vw,3rem)] font-[350]"
          >
            <p className="exit">explore</p>
            <p className="reveal w-full">explore</p>
          </a>
        </div>
      </section>
    </header>


    
  </>
);

}

export default App
