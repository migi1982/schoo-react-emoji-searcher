import sanitizeHtml from 'sanitize-html';
import styles from '@/styles/Card.module.css'

export default function Card(props) {
  const htmlCode = props.item.htmlCode.join('')
  const name = props.item.name.replaceAll(/[≊|,].*/g, '')
  return (
    <article className={styles.card}>
      <p
        className={styles.emoji}
        dangerouslySetInnerHTML={{__html: sanitizeHtml(htmlCode)}}>
      </p>
      <p className={styles.name}>{ name }</p>
      <p className={styles.code}>{ htmlCode}</p>
    </article>
  );
}
