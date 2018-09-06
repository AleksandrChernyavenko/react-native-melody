export const get = async () => {
  await delay()
  const success = getRandomArbitrary(0, 1) > 0.1
  if (!success) {
    return {
      error: true,
      data: null,
    }
  }

  return {
    error: null,
    data: true,
  }

}

const delay = () => {
  return new Promise(resolve => {
    const time = getRandomArbitrary(0, 3000)
    setTimeout(() => resolve(), time)
  })
}

export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

export const getRandomInt = (min: number, max: number): number => {
  return Math.trunc(getRandomArbitrary(min, max))
}
