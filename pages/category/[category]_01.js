import { useRouter } from 'next/router'
import { useListEmoji, useSharedState } from '@/stores/state'
import { computeFilteredData } from '@/utils/function'
import Layout from '@/components/Layout'
import Card from '@/components/Card'

export default function Home() {
  const [ searchText ] = useSharedState('searchText', '')
  const { data } = useListEmoji()
  const router = useRouter()
  const { category } = router.query

  const filteredData = computeFilteredData(data, category, searchText)

  return (
    <Layout category={category}>
      {
        filteredData.map(item => <Card item={item} key={`${item.htmlCode.join('')}`}/>)
      }
    </Layout>
  )
}
