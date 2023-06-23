import { FC } from "react";
import styles from './Header.module.scss'
import Link from "next/link";
import { useRouter } from "next/router";


const Header: FC = () => {

    const {pathname} = useRouter()

    return(
        <header className={styles.header}>
            <Link href='/' className={pathname === '/' ? styles.active: ''}>Home</Link>
            <Link href='/car/1' className={pathname === '/car/[id]' ? styles.active: ''}>First car</Link>
        </header> 
    )
}

export default Header
