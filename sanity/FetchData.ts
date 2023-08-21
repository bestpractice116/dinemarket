import { client } from './lib/client'

export default async function FetchData() {
    const res = await client.fetch(`*[_type == 'product']`)
   
  return res
}
