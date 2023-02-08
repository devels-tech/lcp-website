export interface IFetchReturn {
  data: any | null,
  error: {
    status: number,
    message: string
  } | null
}
