import Link from 'next/link';
import { GiCat } from 'react-icons/gi';

const Header = () => {
    return (
        <header>
        <div>
        <GiCat />
        </div>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About us</Link>
            <Link href='/review'>Review</Link>
            <Link href='/cats'>Cats</Link>
        </nav>
        </header>
    )
}
export default Header;