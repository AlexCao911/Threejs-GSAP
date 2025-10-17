 // Main App Component                                                                     
 // ~~~~~~~~~~~~~~~~~~                                                                      
 // Root application component that orchestrates all page sections.                         
 // Registers GSAP plugins and renders the complete MacBook landing page.                                 
 // Includes navigation, hero, product viewer, showcase, and feature sections.            
 // Alex Cou 25/10/14

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProductViewer from './components/ProductViewer';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from './components/Showcase';
import Performance from'./components/Performance';
import Features from'./components/Features';
import Highlights from './components/Highlights';
import Footer from './components/Footer';


gsap.registerPlugin(ScrollTrigger, SplitText);;

function App(){
  return (
    <main>
      < NavBar        />
      < Hero          />
      < ProductViewer />
      < Showcase      />
      < Performance   />
      < Features />
      < Highlights />
      < Footer /> 
    </main>
  );
}

export default App;
