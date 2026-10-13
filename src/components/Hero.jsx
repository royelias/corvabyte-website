import FlockCanvas from './FlockCanvas.jsx';
import Button from './Button.jsx';
import heroLogo from '../assets/logo/corvabyte-logo-dark-1774x887.png';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <FlockCanvas />
      <div className="wrap">
        <span className="eyebrow rise">Software studio · Web · Mobile · Data</span>
        <h1 id="hero-title" className="rise d1">
          Clever software, <span className="iri">built to ship.</span>
        </h1>
        <p className="hero-sub rise d2">
          Corvabyte designs and builds web platforms, mobile apps and the APIs behind them, for teams that
          need a product in users’ hands, not another slide deck.
        </p>
        <div className="hero-cta rise d3">
          <Button href="#contact" arrow>Start a project</Button>
          <Button href="#services" variant="ghost">Explore services</Button>
        </div>
        <div className="hero-meta rise d4">
          <span><i className="dot" />Booking projects for Q1 2027</span>
          <span>React Native · Node.js · MongoDB</span>
        </div>
      </div>
    </section>
  );
}
