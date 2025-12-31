import Header from './components/Header'
import ChatInterface from './components/ChatInterface'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Your AI Health Care Consultant</h1>
              <p className={styles.heroSubtitle}>
                Talk with our AI doctor to understand symptoms and get treatment guidance.
              </p>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imagePlaceholder}>
                👨‍⚕️👩
              </div>
            </div>
          </div>
        </section>
        <ChatInterface />
      </main>
    </div>
  )
}

