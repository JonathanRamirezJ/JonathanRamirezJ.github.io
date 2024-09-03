// Own styles
import './App.css';

// Own components
import AboutMeSection from './Components/AboutMeSection';
import HeaderSection from './Components/HeaderSection/';
import SkillsSection from './Components/SkillsSection';
import ContactSection from './Components/ContactSection';
import SchoolSection from './Components/SchoolSection';

const App = () => {
  return (
    <>
      <HeaderSection/>
      <AboutMeSection/>
      <SkillsSection/>
      <SchoolSection/>
      <ContactSection/>
    </>
  )
}

export default App;
