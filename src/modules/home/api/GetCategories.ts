import ApiResponse from '../../../interfaces/ApiResponse'
import * as FakeApiService from '../../../services/FakeApiService'
import { CategoryItem } from '../interfaces/CategoriesState'

const fakeCategories = [
  {
    id: '1',
    name: 'Category 1',
    playersCount: 1,
  },
  {
    id: '2',
    name: 'Category 2',
    playersCount: 2,
  },
  {
    id: '3',
    name: 'Category 3',
    playersCount: 3,
  },
]

const fakeError = 'Server temporary unavailable. Please try again later!'

const getCategories = async (): Promise<ApiResponse<CategoryItem[]>> => {

  const response = await FakeApiService.get()

  if (response.error) {
    return {
      data: null,
      error: fakeError,
    }
  }

  return {
    data: fakeCategories,
    error: null,
  }
}

export default getCategories
