import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post'
import Bio from '../components/Bio'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Bio 
            headshot = "https"
            name = "Colby Fayock"
            tagline = "Helping other to learn by doing"
            role = "Developer" 
         />

        <ul className = {styles.post}>
          <li>
            <Post content = "Hey, I´m  new post" date = "05/05/2021"> </Post>
          </li>
          <li>
            <Post content =" I´m working in Sygma trying to design a new web site" date = "05/05/2021"></Post>
                    
          </li>
          <li>
            <Post content =" I´m working in Sygma trying to design a new web site" date = "05/05/2021"></Post>
                    
          </li>
          <li>
            <Post content =" I´m working in Sygma trying to design a new web site" date = "05/05/2021"></Post>
                    
          </li>
          
        </ul>
      
      </main>

      
    </div>
  )
}
