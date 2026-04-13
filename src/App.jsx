import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// Import Element
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import HomeBlog from './components/HomeBlog/HomeBlog';
import Footer from './components/Footer/Footer';
import HomeTemplate from './components/HomeTemplate/HomeTemplate';



// import './App.css'

function App() {
  const [count, setCount] = useState(0);
      // convertirlo en un array de objetos
const bg_info = [
  {
 openHtml : "<html>",
 openBody : "<body>",
 closeHtml : "</html>",
 closeBody : "</body>",
 dev : "{ dev: true }",
 helloWorld :"// hello, world",
 build : "I build the web." ,     
 skills : "Front-end · Back-end · Everything in between",
 skillHtml : "HTML",
 skillCss : "CSS",
 skillJs : "JS",
 skillReact : "React",
 skillNode : "Node.js",
 great : "let's build something great together →",
    }
]
    console.log(bg_info)


  return (
    // <>
   <div>
     <Navbar></Navbar>
     <Hero openH={bg_info[0].openHtml} openB={bg_info[0].openBody} closeH={bg_info[0].closeHtml} closeB={bg_info[0].closeBody}
     dev={bg_info[0].dev} hello={bg_info[0].helloWorld} build={bg_info[0].build} skills={bg_info[0].skills}
     skillH={bg_info[0].skillHtml} skillC={bg_info[0].skillCss} skillJ={bg_info[0].skillJs}
     skillR={bg_info[0].skillReact} skillN={bg_info[0].skillNode} great={bg_info[0].great}></Hero>
     <Intro></Intro>
     <HomeBlog></HomeBlog>
     <HomeTemplate  skillH={bg_info[0].skillHtml} skillC={bg_info[0].skillCss} skillJ={bg_info[0].skillJs}></HomeTemplate>
     <Footer></Footer>
   </div>
      // {/* <section id="center">
      //   <div className="hero">
      //     <img src={heroImg} className="base" width="170" height="179" alt="" />
      //     <img src={reactLogo} className="framework" alt="React logo" />
      //     <img src={viteLogo} className="vite" alt="Vite logo" />
      //   </div>
      //   <div>
      //     <h1>Get started</h1>
      //     <p>
      //       Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
      //     </p>
      //   </div>
      //   <button
      //     className="counter"
      //     onClick={() => setCount((count) => count + 1)}
      //   >
      //     Count is {count}
      //   </button>
      // </section>

      // <div className="ticks"></div>

      // <section id="next-steps">
      //   <div id="docs">
      //     <svg className="icon" role="presentation" aria-hidden="true">
      //       <use href="/icons.svg#documentation-icon"></use>
      //     </svg>
      //     <h2>Documentation</h2>
      //     <p>Your questions, answered</p>
      //     <ul>
      //       <li>
      //         <a href="https://vite.dev/" target="_blank">
      //           <img className="logo" src={viteLogo} alt="" />
      //           Explore Vite
      //         </a>
      //       </li>
      //       <li>
      //         <a href="https://react.dev/" target="_blank">
      //           <img className="button-icon" src={reactLogo} alt="" />
      //           Learn more
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      //   <div id="social">
      //     <svg className="icon" role="presentation" aria-hidden="true">
      //       <use href="/icons.svg#social-icon"></use>
      //     </svg>
      //     <h2>Connect with us</h2>
      //     <p>Join the Vite community</p>
      //     <ul>
      //       <li>
      //         <a href="https://github.com/vitejs/vite" target="_blank">
      //           <svg
      //             className="button-icon"
      //             role="presentation"
      //             aria-hidden="true"
      //           >
      //             <use href="/icons.svg#github-icon"></use>
      //           </svg>
      //           GitHub
      //         </a>
      //       </li>
      //       <li>
      //         <a href="https://chat.vite.dev/" target="_blank">
      //           <svg
      //             className="button-icon"
      //             role="presentation"
      //             aria-hidden="true"
      //           >
      //             <use href="/icons.svg#discord-icon"></use>
      //           </svg>
      //           Discord
      //         </a>
      //       </li>
      //       <li>
      //         <a href="https://x.com/vite_js" target="_blank">
      //           <svg
      //             className="button-icon"
      //             role="presentation"
      //             aria-hidden="true"
      //           >
      //             <use href="/icons.svg#x-icon"></use>
      //           </svg>
      //           X.com
      //         </a>
      //       </li>
      //       <li>
      //         <a href="https://bsky.app/profile/vite.dev" target="_blank">
      //           <svg
      //             className="button-icon"
      //             role="presentation"
      //             aria-hidden="true"
      //           >
      //             <use href="/icons.svg#bluesky-icon"></use>
      //           </svg>
      //           Bluesky
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </section>

      // <div className="ticks"></div>
      // <section id="spacer"></section> */}
    // </>
  )
}

export default App
