export default async function handler(req, res) {
  const response = await fetch('https://emojihub.yurace.pro/api/all')
  const emoji = await response.json()
  res.status(200).json(emoji)
}
