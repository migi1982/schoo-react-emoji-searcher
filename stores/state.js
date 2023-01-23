import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

export function useListEmoji () {
  const { data, error, isLoading } = useSWR('/api/all', fetcher, {
    fallbackData: []
  })

  return {
    data,
    isLoading,
    isError: error
  }
}

export const useSharedState = (key, initial) => {
  const { data: state, mutate: setState } = useSWR(key, null, {
    fallbackData: initial
  })
  return [state, setState]
}
