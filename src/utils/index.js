const getBreadcrumbs = (path) => {
  let breadcrumbs = path.split('/').slice(1).map(item => {
    return {
      name: item,
      link: `${item}`
    }
  })
  return breadcrumbs
}

export { getBreadcrumbs }