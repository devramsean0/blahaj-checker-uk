import Layout from '../components/layout'
import { Suspense } from 'react'
import StockRender from '../components/stock/render'
import useSWR from 'swr'
import Loading from '../components/misc/loading'
export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error } = useSWR('/api/stores', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <Loading />
  return (
    <>
      <Layout title="home">
        <p>
        TODO: This page
        <br />
        Not fully working or styled but its a start
        </p>
        <section className='card'>
          <h2 className='title card-title'>availability</h2>
          <table border="1">
            <tr>
              <th>Stock Indicator</th>
              <th>Location</th>
              <th>Stock</th>
            </tr>
            <Suspense fallback={`Loading...`}>
              <StockRender data={data} />
            </Suspense>
          </table>
        </section>
    </Layout>
    </>
  )
}
