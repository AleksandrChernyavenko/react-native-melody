import ApiResponse from '../../../interfaces/ApiResponse'
import * as FakeApiService from '../../../services/FakeApiService'
import { GenreItem } from '../interfaces/GenresState'

const getFakeGenres = (): GenreItem[] => {
  return [
    {
      id: '1',
      name: 'Pop',
      imageSrc: 'https://via.placeholder.com/350x150',
      playersCount: FakeApiService.getRandomInt(0, 1000),
    },
    {
      id: '2',
      name: 'Jazz',
      imageSrc: 'https://via.placeholder.com/350x150',
      playersCount: FakeApiService.getRandomInt(0, 1000),
    },
    {
      id: '3',
      name: 'Rock',
      imageSrc: 'https://via.placeholder.com/350x150',
      playersCount: FakeApiService.getRandomInt(0, 1000),
    },
    {
      id: '4',
      name: 'Classical music',
      imageSrc: 'https://via.placeholder.com/350x150',
      playersCount: FakeApiService.getRandomInt(0, 1000),
    },
    {
      id: '5',
      name: 'Dance music',
      imageSrc: 'https://via.placeholder.com/350x150',
      playersCount: FakeApiService.getRandomInt(0, 1000),
    },
    {
      id: '6',
      name: 'Techno',
      imageSrc: 'https://via.placeholder.com/350x150',
      playersCount: FakeApiService.getRandomInt(0, 1000),
    },
  ]
}

const fakeError = 'Server temporary unavailable. Please try again later!'

export const getGenres = async (): Promise<ApiResponse<GenreItem[]>> => {

  const response = await FakeApiService.get()

  if (response.error) {
    return {
      data: null,
      error: fakeError,
    }
  }

  return {
    data: getFakeGenres(),
    error: null,
  }
}

let subscription: NodeJS.Timer

export const subscribe = (onChange: (items: GenreItem[]) => void): void => {
  if (subscription) {
    return
  }

  subscription = setInterval(() => {
    onChange(getFakeGenres())
  }, 500)

}

export const unsubscribe = () => {
  if (subscription) {
    clearInterval(subscription)
  }
}

export default getGenres
