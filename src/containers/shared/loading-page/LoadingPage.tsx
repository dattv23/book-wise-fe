import styles from './LoadingPage.module.scss'

const LoadingPage = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export default LoadingPage
