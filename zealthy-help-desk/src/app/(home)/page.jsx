import Heading from '@/components/Typography/Heading'
import BodyText from '@/components/Typography/BodyText'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import copy from '@/copy/copy'
import styles from './styles.module.css'

const Home = () => {
  const content = copy.home

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <Heading className={styles.content}>{content.header}</Heading>
          <BodyText className={styles.content}>{content.description}</BodyText>
          <Button className={styles.button}text={content.buttonText} href="/create-a-ticket" />
        </div>
        <Image
          src="images/desk.svg"
          width={400}
          height={350}
          alt="An image of a laptop with a lamp, a mug, and a cactus."
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Home
