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
          <Heading>{content.header}</Heading>
          <BodyText>{content.description}</BodyText>
          <Button text={content.buttonText} href="/create-a-ticket" />
        </div>
        <Image
          src="images/desk.svg"
          width={400}
          height={400}
          alt="An image of a laptop with a lamp, a mug, and a cactus."
        />
      </div>
    </div>
  )
}

export default Home
