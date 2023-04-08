import styles from '@/styles/Info.module.scss'

export const Info = () => {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.aboutMe}>
                    <h1 className={styles.aboutHeader}>My name is Andrew</h1>
                    <p className={styles.aboutText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam molestias quidem, animi vel laboriosam dolores quod dolorum sapiente, magnam id aliquid accusamus consequuntur voluptate.</p>
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