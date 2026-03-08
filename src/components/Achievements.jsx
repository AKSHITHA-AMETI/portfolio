import '../styles/Achievements.css'
import { FaCode, FaBook, FaTrophy, FaGraduationCap, FaMedal, FaAward } from 'react-icons/fa'

function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Coding Excellence',
      description: 'Solved 300+ problems on LeetCode and 200+ on TakeUForward, demonstrating strong algorithmic problem-solving skills.',
      icon: FaCode
    },
    {
      id: 2,
      title: 'Competitive Exam Success',
      description: 'Scored 4362 in TSEAMCET 2023 and 11172 (93.5 percentile) in JEE Mains 2023, showcasing consistent performance in competitive exams.',
      icon: FaTrophy
    },
    {
      id: 3,
      title: 'Academic Excellence',
      description: 'Acquired 9.56 CGPA till now in B.E, reflecting strong academic consistency and dedication.',
      icon: FaAward
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          {achievements.map(achievement => {
            const IconComponent = achievement.icon
            return (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-icon"><IconComponent /></div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
