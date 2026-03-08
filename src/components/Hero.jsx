import '../styles/Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Akshitha Ameti</h1>
        <p className="tagline"> Software Engineer | Web Developer | Problem Solver</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
