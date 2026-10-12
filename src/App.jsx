import PrototypeBanner from './components/PrototypeBanner.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import ProcessStory from './components/ProcessStory.jsx';
import ServicesTour from './components/ServicesTour.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Closing from './components/Closing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      {/* <PrototypeBanner /> */}
      <Nav />
      <main id="top">
        <Hero />
        <Metrics />
        <ProcessStory />
        <ServicesTour />
        <CaseStudies />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
