import './App.css'
import {useEffect} from "react";
import Hero from "./components/Hero.tsx";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    useEffect(() => {
        // Scroll animation observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animated")
                    }
                })
            },
            { threshold: 0.1 },
        )
        const animateElements = document.querySelectorAll(".animate-on-scroll")
        animateElements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

  return (
      <div className="app-container">
          {/* Background Blur Circles */}
          <div className="bg-circles">
              <div className="blur-circle blur-circle-1"></div>
              <div className="blur-circle blur-circle-2"></div>
              <div className="blur-circle blur-circle-3"></div>
              <div className="blur-circle blur-circle-4"></div>
              <div className="blur-circle blur-circle-5"></div>
              <div className="blur-circle blur-circle-6"></div>
              <div className="blur-circle blur-circle-7"></div>
          </div>

          <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />

          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />

          {/* Footer */}
          <footer className="footer">
              <div className="footer-content">
                  <p className="footer-text">&copy; {new Date().getFullYear()} Harsha Dilan. All rights reserved.</p>
              </div>
          </footer>
      </div>
  )
}

export default App
