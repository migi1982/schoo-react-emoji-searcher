import { useRouter } from 'next/router'
import { useListEmoji, useSharedState } from '@/stores/state'
import { computeFilteredData } from '@/utils/function'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import Message from '@/components/Message'


export default function Home() {
  const [ searchText ] = useSharedState('searchText', '')
  const { data, isError, isLoading } = useListEmoji()
  const router = useRouter()
  const { category } = router.query

  const filteredData = computeFilteredData(data, category, searchText)

  return (
    <Layout category={category}>
      {
        filteredData.map(item => <Card item={item} key={`${item.htmlCode.join('')}`}/>)
      }
      <Message isError={isError} isLoading={isLoading} length={filteredData.length} />
    </Layout>
  )
}
