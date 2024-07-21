const sample = arr => arr[Math.floor(Math.random() * arr.length)]

const range = (end, start = 0, step = 1) => {
  const output = []
  for (let i = start; i < end; i += step) output.push(i)
  return output
}

export { range, sample }
