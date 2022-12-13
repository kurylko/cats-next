import Link from "next/link";

const NotFoundPage=()=>{
    return(
        <div className='not-found'>
            <h1>Oops...</h1>
            <h2>Not found the page</h2>
            <p>Go to <Link href='/'>main page</Link></p>
        </div>
    )
}

export default NotFoundPage;