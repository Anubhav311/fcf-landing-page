import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from '../assets/image.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.parentContainer}>
          <div className={styles.firstChildContainer}>
            <div className={styles.leftContainer}>
              <h1>Free Cash Flow <br/>is the king</h1>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
              <div id="revue-embed">
                <form action="https://www.getrevue.co/profile/freecashflow/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
                  <div className={styles.inputContainer} class="revue-form-group">
                    {/* <label for="member_email">Email address</label> */}
                    <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email" />
                  </div>
                  {/* <div class="revue-form-group">
                  <label for="member_first_name">First name <span class="optional">(Optional)</span></label>
                  <input class="revue-form-field" placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name"/>
                  </div>
                  <div class="revue-form-group">
                  <label for="member_last_name">Last name <span class="optional">(Optional)</span></label>
                  <input class="revue-form-field" placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name"/>
                </div> */}
                  <div className={styles.buttonContainer} class="revue-form-actions">
                    <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
                      Subscribe
                    </button>
                  </div>
                  {/* <div class="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div> */}
                </form>
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
