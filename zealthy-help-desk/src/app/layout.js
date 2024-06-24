import Header from '@/components/Header/Header'
import styles from './globals.css'

export const metadata = {
  title: 'Zealthy Help Desk',
  description: 'Healthcare done your way.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <body>
        <main className={styles.layout}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
