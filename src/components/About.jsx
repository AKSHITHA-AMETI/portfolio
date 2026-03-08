import '../styles/About.css'
// icons library for skill cards
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaUsers, FaMicrochip } from 'react-icons/fa'
import resumePDF from '../../Akshitha_Ameti_Resume.pdf'

function About() {
  // redesign skills section to match the screenshot with icons
  const skillCards = [
    {
      icon: <FaPython className="skill-icon" />,                
      title: 'Python',
      description:
        'Data Structures & Algorithms, Python Libraries (Pandas, NumPy, Matplotlib, Scikit-learn), Regular Expressions'
    },
    {
      icon: <FaJava className="skill-icon" />,
      title: 'Java',
      description: 'Object-Oriented Programming, Core Java Concepts'
    },
    {
      icon: <FaHtml5 className="skill-icon" />,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, React, Responsive Design, Web Development Fundamentals'
    },
    {
      icon: <FaMicrochip className="skill-icon" />,
      title: 'Core CS Concepts',
      description: 'Operating Systems, Computer Networks, Database Management Systems (DBMS)'
    },
    {
      icon: <FaDatabase className="skill-icon" />,
      title: 'Database Technologies',
      description: 'SQLite, NoSQL(MongoDB), Database Design, Query Optimization'
    },
    {
      icon: <FaUsers className="skill-icon" />,
      title: 'Collaboration & Tools',
      description: 'Team Projects, Hackathons, Development Tools, Problem-Solving, Logical Thinking'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am an enthusiastic IT student with a strong interest in Machine Learning, Data Analytics, and Software Development. I enjoy building intelligent applications and using data-driven approaches to solve real-world problems.<br/>
<br/>
My technical skills include Python, Java, Data Structures & Algorithms, Pandas, NumPy, and scikit-learn, along with experience in web development using HTML, CSS, JavaScript, Node.js, and React. I have also worked with databases such as MongoDB and SQLite.<br/>
<br/>
I am passionate about developing innovative projects, improving problem-solving skills, and continuously learning new technologies in AI, analytics, and software engineering to create impactful solutions.
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skillCards.map((card) => (
              <div key={card.title} className="skill-card">
                {card.icon}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-link">
          <a href={resumePDF} className="btn btn-primary" download="Akshitha_Ameti_Resume.pdf">
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
