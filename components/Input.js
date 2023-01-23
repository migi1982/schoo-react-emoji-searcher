import styles from '@/styles/Input.module.css'
import { useSharedState } from '@/stores/state'

export default function Input() {
  const [searchText, setSearchText] = useSharedState('searchText', '')

  return (
    <input
      className={styles.input}
      type="text"
      placeholder='input search text'
      onChange={e => setSearchText(e.target.value)}
      value={searchText}
    />
  );
}
