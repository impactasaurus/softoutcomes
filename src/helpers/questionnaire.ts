const matchingLabels = (s1: string[], s2: string[]): boolean => {
  if (s1.length !== s2.length) {
    return false
  }
  return s1.reduce((common, _, i) => {
    return common && s1[i] === s2[i]
  }, true)
}

export const commonLabels = (labels: string[][]): boolean => {
  return labels.reduce((has, _, i) => {
    if (i == 0) {
      return has
    }
    return has && matchingLabels(labels[i-1], labels[i])
  }, true)
}
