import '../styles/Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Hair & Skin Care Recommendation System',
      description: 'Built a recommendation system that suggests hair and skincare remedies (natural or treatment) based on user inputs like symptoms and severity. Implemented RandomForestClassifier and Nearest Neighbors to generate personalized care suggestions.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
      link: 'https://colab.research.google.com/drive/1LawTA9ZZG36dMPvgePFzEe8VlL29d2XQ?usp=sharing'
    },
    {
      id: 2,
      title: 'Event Registration Tracker',
      description: 'Developed a full-stack system to create events and track participant registrations. Implemented backend routes and database models to manage event details and registrations.',
      technologies: ['Node.js', 'Express.js', 'HTML', 'CSS', 'JavaScript', 'MongoDB'],
      link: 'https://github.com/AKSHITHA-AMETI/Event-Registration-Tracker'
    },
    {
      id: 3,
      title: 'Mood Journal',
      description: 'Built a web app to track daily moods using emoji selections and a calendar view. Integrated Spotify recommendations based on the user’s mood.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Spotify API'],
      link: 'https://rococo-basbousa-72ae10.netlify.app/'
    },
    {
      id: 4,
      title: 'Material Access Hub',
      description: 'Developed an inventory system with user/admin dashboards for managing materials. Used Doubly Linked Lists and Stacks for data handling and visualized quantities using Matplotlib.',
      technologies: ['Python', 'Data Structures', 'Matplotlib', 'Tabulate'],
      link: 'https://colab.research.google.com/drive/1kYhX-OtG_zIs2_GzbZsHAVC2_7aRFP9D?usp=sharing'
    },
    {
      id: 5,
      title: 'Water Quality Predictor',
      description: 'Built a machine learning model to predict water potability using water quality parameters. Deployed an interactive interface using Streamlit for real-time predictions.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy','Streamlit'],
      link: 'https://github.com/AKSHITHA-AMETI/Water-Quality-Prediction'
    },
    {
      id: 6,
      title: 'Weather Web App',
      description: 'Designed and developed a responsive weather web app to display current conditions and forecasts. Implemented API integration for real-time data and a clean, user-friendly interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      link: 'https://akshitha-ameti.github.io/Weather/'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
