import { Fetcher } from '@commerce/utils/types'

export const fetcher: Fetcher = async () => {
  console.log('FETCHER')
  // TODO: get data from sanity
  console.log('sanity fetcher');

  const res = await fetch('./data.json')
  if (res.ok) {
    const { data } = await res.json()
    return data
  }
  throw res
}
