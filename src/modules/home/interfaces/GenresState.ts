export interface GenreItem {
  id: string,
  name: string,
  imageSrc: string,
  playersCount: number,
}

export default interface GenresState {
  items: GenreItem[]
  loading: boolean,
  error: string,
}
