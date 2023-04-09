import Link from "next/link"
import styles from "@/styles/BlogCard.module.scss"
import Image from "next/image"

export const BlogCard = ({ title, author, coverPhoto, datePublished, slug }: { title: string; author: any; coverPhoto: any; datePublished: string; slug: string; }) => {
    return (
        <>
            <Link href={"/posts/" + slug}>
                <div className={styles.card}>

                    <div className={styles.imgContainer}>
                        <Image src={coverPhoto.url} alt="" width="1000" height="1000" />
                    </div>
                    <div className={`${styles.text}
                    flex
                    flex-col
                    gap-2
                    ml-4
                    mb-4`}>
                        <h2 className="text-white
                        text-xl
                        m-0
                        
                        max-md:max-w-[250px]
                        max-md:overflow-hidden">{title}</h2>
                        
                        <div className={`${styles.author} 
                        flex
                        gap-4
                        items-center`}>
                            <Image src={author.avatar.url} alt="" width="1000" height="1000" className={styles.avatar} />
                            <div className={styles.info}>
                                <p className="text-white/90
                                text-md">{author.name}</p>
                                <p className="text-white/60
                                text-sm">{datePublished}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}