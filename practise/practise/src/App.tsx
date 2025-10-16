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

/**
 * Top-level application component that composes the main page layout.
 *
 * Renders the primary site sections in order: navigation, hero, product viewer,
 * showcase, performance, features, highlights, and footer.
 *
 * @returns The root JSX element containing the assembled main page structure.
 */
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