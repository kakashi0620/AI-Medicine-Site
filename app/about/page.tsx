import Header from '../components/Header'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.aboutSection}>
          <h1 className={styles.aboutTitle}>About Us</h1>
          <p className={styles.aboutText}>
            We are a digital healthcare consulting platform powered by Artificial Intelligence. 
            Our AI doctor helps patients understand symptoms, possible illnesses, and basic treatment guidance.
          </p>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/>
                <path d="M9 12l2 2 4-4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="12" y1="8" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
          </div>
          <p className={styles.sectionText}>
            To provide fast, accessible, and reliable health information to everyone.
          </p>
        </section>

        <section className={styles.disclaimerSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white"/>
                <line x1="12" y1="8" x2="12" y2="16" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="12" x2="16" y2="12" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Disclaimer</h2>
          </div>
          <p className={styles.sectionText}>
            This AI consultant does not replace professional medical advice. 
            Always consult a certified doctor for serious conditions.
          </p>
        </section>
      </main>
    </div>
  )
}

