import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, []);

    return (
        <div className='not-found'>
            <h1>Oops...</h1>
            <h2>Not found the page</h2>
            <h3>Go to <Link href='/'>main page</Link> in 3 sec</h3>
        </div>
    )
}

export default NotFoundPage;