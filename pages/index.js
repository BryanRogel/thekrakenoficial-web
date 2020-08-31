import Head from 'next/head'
import styles from '../styles/Home.module.css'

import SocialMediaLinks from '../components/socialMediaLinks/SocialMediaLinks'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
    <div className="bg"></div>
    <div className="bg bg2"></div>
    <div className="bg bg3"></div>
    <div className="">

      <Head>
        <title>The Kraken Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          BIENVENIDOS A
        </h1>
        <img src="/teamlogo.png" alt="The Kraken Team Logo" className="logo" />

        <p className={styles.description} style={{ color: 'white' }}>
          El mejor equipo para MOBAS
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>TheKrakenOficial </h3>
            <p>Líder de la manada, tiene tácticas que lo hacen sobresalir y sobrevivir.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Kirito </h3>
            <p>Es un crack</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Pandita </h3>
            <p>Es un panda.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Marco Fonktana </h3>
            <p>
              Con sus años de experiencia y un apellido extraño es capaz de aduerñarse de la arena.
            </p>
          </a>
          <a
            href="#"
            className={styles.card}
          >
            <h3>The Tamalero </h3>
            <p>
              Vende tamales en su tiempo libre, pero que su profesión no te confunda, es un tipo increible.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <SocialMediaLinks/>
      </footer>
    </div>
    </div>
    <style jsx>{`
    html {
  height:100%;
}

body {
  margin:0;
}

.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #000 50%, #9115e8 50%);
  bottom:0;
  left:-50%;
  opacity:.5;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

.content {
  background-color:rgba(255,255,255,.8);
  border-radius:.25em;
  box-shadow:0 0 .25em rgba(0,0,0,.25);
  box-sizing:border-box;
  left:50%;
  padding:10vmin;
  position:fixed;
  text-align:center;
  top:50%;
  transform:translate(-50%, -50%);
}

h1 {
  color: white;
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
      @media (max-width: 450px){
        .logo {
          height: 200px;
        }
        h1 {
          font-size: 40px;
        }
      }
    `}</style>
    </>
  )
}





