import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Feel free to reach out if you're interested in collaboration or have any questions!
        </p>
        <div className="contact-links">
          <a href="mailto:akshithaameti85@gmail.com" className="contact-link">📧 Email</a>
          <a href="https://github.com/AKSHITHA-AMETI/" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
          <a href="https://linkedin.com/in/akshitha-ameti-901108292" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
