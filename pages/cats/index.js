import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Cats.module.css';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    return {
        props: { cats: data }
    }
}

const Cats = ({ cats }) => {
    return (
        <div>
            <h1>Super Cats</h1>
            <h3>Some Super Cats living on our planet.</h3>
            {cats.map(cat => {
                return (
                    <Link href={`/cats/${cat.id}`} key={cat.id}>
                        <div className={styles.catCard}>
                            <div className={styles.imageContainer}>
                                <Image
                                src={`${cat.image}`}
                                alt={`${cat.name}`}
                                width={100}
                                height={100}
                                />
                                </div>
                            <div>
                                <h3>{cat.name}</h3>
                                <h4>{cat.desc}</h4>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )

}
export default Cats;