import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '@mantine/core';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
    <Head>
      <title>Amazing cats | Main</title>
      <meta name='title' content='Amazing cats' />
    </Head>
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Main page</h1>
      <div className={styles.mainImage}>
        <Image src='/cat-1.png' alt='main-cat-img' width={400} height={300}/>
      </div>
      <p className={styles.text}>Can you imagine a life without cats?</p>
      <p className={styles.text}>Without nice meew and damaged furniture.</p>
      <Link href='/cats' passHref>  
        <Button className={styles.btn} component='a'>All amazing cats</Button>
        </Link>
    </div>
    </>
  )
}
