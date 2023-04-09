import styles from '@/styles/Info.module.scss'
import { useTranslation } from 'next-i18next'

export const Info = () => {
    // const { t } = useTranslation("common")
    return (
        <>
            <div className={styles.info}>
                <div className={styles.aboutMe}>
                    <h1 className={styles.aboutHeader}>My name is Andrew</h1>
                    <p className={styles.aboutText}>
                        I am a 20 year old front-end developer based in Poland. 
                        And I passionate about creating websites and web applications. 
                        I am also interested in learning new technologies and improving my programming skills.
                    </p>
                </div>
                <div className={styles.skillsContainer}>
                    <h1>Skills</h1>
                    <div className={styles.skills}>
                        <div className={styles.skillName}>HTML</div>
                        <div className={styles.skillName}>CSS</div>
                        <div className={styles.skillName}>TailwindCSS</div>
                        <div className={styles.skillName}>RWD</div>
                        <div className={styles.skillName}>Figma</div>
                        <div className={styles.skillName}>JavaScript</div>
                        <div className={styles.skillName}>Next.JS</div>
                        <div className={styles.skillName}>GraphQL</div>
                    </div>
                </div>
            </div>
        </>
    )
}