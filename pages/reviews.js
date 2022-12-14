import Head from "next/head";


const Reviews = ({ reviews }) => {

    console.log(reviews)
    return (
        <>
            <Head>
                <title>Amazing cats | Reviews</title>
                <meta name='title' content='Amazing cats reviews' />
            </Head>
            <div>
                <h1>Reviews</h1>
                <div className='reviews'>
                    {!!reviews.length && reviews.slice(0,11).map(res => {
                        return (
                            <div key={res.id} className='review'>
                                {res.id} {' '}
                                {`${res.body.slice(0,90)}...`}
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
            reviews: data.slice(0, 11)
        }
    }
}

export default Reviews;