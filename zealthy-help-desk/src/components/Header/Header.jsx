import Link from 'next/link'
import styles from './Header.module.css'
import BodyText from '@/components/Typography/BodyText'
import Image from 'next/image'
import copy from '@/copy/copy'

const Header = () => {
    const links = copy.header
    return (
        <div className={styles.header}>
            <Link href="/">
                <Image
                    src="logo/zealthy-logo.svg"
                    width={150}
                    height={24}
                    alt={'Zealthy Logo'}
                    priority={true}
                />
            </Link>
            <div className={styles.headerlinks}>
                <Link className={styles.link} href={links.home.link}>
                    <BodyText>{links.home.text}</BodyText>
                </Link>
                <Link className={styles.link} href={links.help.link}>
                    <BodyText>{links.help.text}</BodyText>
                </Link>
                <Link className={styles.link} href={links.admin.link}>
                    <BodyText>{links.admin.text}</BodyText>
                </Link>
            </div>
        </div>
    )
}

export default Header
