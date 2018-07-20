export interface CategoryItem {
  id: string,
  name: string,
  playersCount: number,
}

export default interface CategoriesState {
  items: CategoryItem[]
  loading: boolean,
  error: string,
}
