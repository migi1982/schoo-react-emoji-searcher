export default function Message(props) {
  if (props.isError) return <p>&#128576; Sorry, an error has occurred</p>
  if (props.isLoading) return <p>&#128049; Now loading...</p>
  if (props.length === 0) return <p>&#128575; Sorry, there is no search result</p>
}
