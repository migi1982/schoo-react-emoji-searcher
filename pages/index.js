import { useListEmoji, useSharedState } from '@/stores/state'
import { computeFilteredData } from '@/utils/function'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import Message from '@/components/Message'

export default function Home() {
  const [ searchText ] = useSharedState('searchText', '')
  const { data, isError, isLoading } = useListEmoji()

  const filteredData = computeFilteredData(data, 'all', searchText)

  return (
    <Layout category="all">
      {
        filteredData.map(item => <Card item={item} key={`${item.htmlCode.join('')}`}/>)
      }
      <Message isError={isError} isLoading={isLoading} length={filteredData.length} />
    </Layout>
  )
}
