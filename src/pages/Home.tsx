import SelectedWorks from '../components/SelectedWorks';
import HeroImageReveal from '../components/HeroImageReveal';
import About from '../components/about';
import AboutMe from '../components/AboutMe';
import ContactFooter from '../components/ContactFooter';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroImageReveal /> 



      {/* Experience Section Replaced by AboutMe */}
      <AboutMe />

      <div id="projects">
        <SelectedWorks />
      </div>

      <div id="about">
        <About />
      </div>

      <ContactFooter />
    </main>
  );
}
