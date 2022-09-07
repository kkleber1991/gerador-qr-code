import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

export default function Home() {

  const [link, setLink] = useState('');
  const [qrcodeImg, setQrcodeLink] = useState('');

  function GenerateImage(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, function (err, url) {
      setQrcodeLink(url);
    }
    )
  }

  function handleQrCode(e) {
    setLink(e.target.value)
    GenerateImage(e.target.value)
  }

  return (

    <body>
      <div className={styles.container}>
        <Head>
          <title>Gerador de QR-Code - Com imagem</title>
          <meta name="description" content="Um gerador de QR-Code simples e prático!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

          <QRCode
            value={link}>
          </QRCode>

          <input className={styles.card} placeholder="Digite seu Link" value={link}
            onChange={(e) => handleQrCode(e)}>
          </input>

          <a href={qrcodeImg} download={`qrcode.png`}>
            Download QR-Code
          </a>

        </main>

      </div>
      <footer className={styles.footer}>
        <a
          href="https://kedllon.solutions"
          target="_blank"
          rel="Kedllon Solutions logo"
        >
          Powered by {' '}
          <span>
            <Image src="/faviconKS.png" alt="Vercel Logo" width={62} height={23} />
          </span>
        </a>
      </footer>
    </body>
  )
}
