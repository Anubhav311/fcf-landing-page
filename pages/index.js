import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from '../assets/image-min.png'
import logo from '../assets/fcf-logo.png'


function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FCF - Free Cash Flow</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="Logo"
            width={180}
            height={40}
          />
        </div>
        <div className={styles.parentContainer}>
          <div className={styles.firstChildContainer}>
            <div className={styles.leftContainer}>
              <h1>Embark on the journy <br />to increase your <br />Free Cash Flow</h1>
              <p>Free Cash Flow (FCF) will help you in tracking and analyzing your financial data. Further, you will get personalized advice and resources on how you can increase it based on your data. <br />Join the community of Free Cash Flow enthusiasts.</p>
              <div id="revue-embed">
                <div className={styles.buttonContainer} >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYqf7Fcz0KZktM_jVSpD5YudYeMahQwYU7kWB_tt9uRM_xVA/viewform?usp=sf_link" target="_blank">
                    <button style={{cursor: "pointer"}} name="member[subscribe]" id="member_submit">
                      Subscribe
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.secondChildContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Index;
