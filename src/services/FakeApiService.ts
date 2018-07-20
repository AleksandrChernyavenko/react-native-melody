export const get = async () => {
  await delay()
  console.log('delay DONE');
  const success = getRandomArbitrary(0, 1) > 0.2
  console.log('success ?',success);
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

const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}
