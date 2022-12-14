import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Cats.module.css';


export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    const paths = data.map(cat => {
        return {
            params: { id: cat.id }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data = await res.json();

    return {
        props: { cat: data }
    }
}

const Details = ({ cat }) => {
    console.log("cat", cat)
    return (
        <>
            <Head>
                <title>Amazing cats | {cat.name}</title>
                <meta name='title' content='Amazing cats' />
            </Head>
        <div className={styles.singleCat}>
            <h1>{cat.name}</h1>
            <div className={styles.imageContainer}>
                <Image 
                    src={`${cat.image}`}
                    alt={`${cat.name}`}
                    width={100}
                    height={100}
                    object-fit="contain" 
                />
            </div>
            <div>
                {cat.desc}
            </div>
        </div>
        </>
    )

}
export default Details;