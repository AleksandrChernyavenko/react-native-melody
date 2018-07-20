export default interface ApiResponse<T> {
  data: any | T,
  error: any | null,
}
