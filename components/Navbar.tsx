import Image from "next/image"
import styles from "@/styles/Navbar.module.scss"
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import { Instagram, LinkedIn } from "@mui/icons-material";

export const Navbar = ({ author }: { author: any; }) => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.hero}>
                    <Image src={author.avatar.url} alt="" width={1000} height={1000} />
                    <div className={styles.userInfo}>
                        <p> Hi, I am <span className={styles.styledText}>{author.name}</span>! </p>
                        <p>Young <span className={styles.styledText}>front-end</span> developer</p>
                    </div>
                </div>
                <div className={`${styles.socials}
                
                text-3xl
                
                max-md:text-2xl`}>
                    <Link href="https://github.com/ddebixx"><GitHubIcon className={styles.icon} fontSize="inherit"/></Link>
                    <Link href="https://www.instagram.com/debix.cr2/"><Instagram className={styles.icon} fontSize="inherit"/></Link>
                    <Link href="https://www.linkedin.com/in/andrii-naida-74b610268/"><LinkedIn className={styles.icon} fontSize="inherit"/></Link>
                </div>
            </div>
        </>
    )
}