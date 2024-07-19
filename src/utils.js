const sample = arr => arr[Math.floor(Math.random() * arr.length)]

const range = (start, end, step = 1) => {
  const output = []
  let _end = end
  let _start = start

  if (typeof end === "undefined") {
    _end = start
    _start = 0
  }
  for (let i = _start; i < _end; i += step) output.push(i)
  return output
}

export { range, sample }
