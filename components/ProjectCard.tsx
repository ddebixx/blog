import Image from "next/image"
import styles from '@/styles/ProjectCard.module.scss'

export const ProjectCard = ({ projectTitle, projectPhoto, projectDescription }: {projectTitle: string; projectPhoto: any; projectDescription: any;}) => {
    return (
        <>
            <div className={styles.project}>
                <Image src={projectPhoto.url} alt="" width={2000} height={2000} className="rounded-md" />
                <h1>{projectTitle}</h1>
                <div dangerouslySetInnerHTML={{ __html: projectDescription.html }} className={styles.projectText}></div>
            </div>
        </>
    )
}