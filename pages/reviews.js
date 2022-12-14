import Head from "next/head";
import styles from '../styles/Reviews.module.css';


const Reviews = ({ reviews }) => {

    return (
        <>
            <Head>
                <title>Amazing cats | Reviews</title>
                <meta name='title' content='Amazing cats reviews' />
            </Head>
            <div>
                <h1>Reviews</h1>
                <div className={styles.reviews}>
                    {!!reviews.length && reviews.slice(0,5).map(res => {
                        return (
                            <div key={res.id} className={styles.review}>
                                {res.id} {' '} 
                                {`${res.body.slice(0,80)}...`}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json();
    return{
        props:{
            reviews: data.slice(0, 5)
        }
    }
}

export default Reviews;