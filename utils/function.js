const computeFilteredData = (data, category, text) => {
  if (!data) {
    return []
  }
  const categoryData = category === 'all' ? data : data.filter(item => {
    const categoryName = category.replaceAll('-', ' ')
    return item.category === categoryName
  })
  if (!text) {
    return categoryData
  }
  return categoryData.filter(item => item.name.includes(text))
}

export {
  computeFilteredData
}
