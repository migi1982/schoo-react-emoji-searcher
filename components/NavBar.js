import Link from 'next/link';
import styles from '@/styles/NavBar.module.css'

const LIST_CATEGORY = [
  'smileys-and-people',
  'animals-and-nature',
  'food-and-drink',
  'travel-and-places',
  'activities',
  'objects',
  'symbols',
  'flags'
]

export default function NavBar(props) {
  return (
    <nav className={styles.navbar}>
      <Link
        href={`/`}
        className={`${styles.btn} ${props.category === 'all' ? styles.active : null}`}
      >
        all
      </Link>
      {
        LIST_CATEGORY.map(item => {
          return (
            <Link
              href={`/category/${item}/`}
              key={item}
              className={`${styles.btn} ${props.category === item ? styles.active : null}`}
            >
              { item }
            </Link>
          )
        })
      }
    </nav>
  )
}
