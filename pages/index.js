import Link from 'next/link';
import {Button} from '@mantine/core';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>Main page</h1>
      <p className={styles.text}>Can you imagine a life without cats?</p>
      <p className={styles.text}>Without nice meew and damaged furniture.</p>
      <Link href='/cats' passHref>  
        <Button className={styles.btn} component='a'>All amazing cats</Button>
        </Link>
    </div>
  )
}
