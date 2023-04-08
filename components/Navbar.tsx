import Image from "next/image"
import styles from "@/styles/Navbar.module.scss"
import React from "react";

export const Navbar = ({ author }: {author: any;}) => {
    return (
        <>
            <div className={styles.navbar}>
                    <Image src={author.avatar.url} alt="" width={1000} height={1000} />
                <div className={styles.userInfo}>
                    <p> Hi, I am <span className={styles.styledText}>{author.name}</span>! </p>
                    <p>Young <span className={styles.styledText}>front-end</span> developer</p>
                </div>
            </div>
        </>
    )
}