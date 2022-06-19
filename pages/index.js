import Layout from '../components/layout'
import StoreDisplay from '../components/stores/display'
export default function Home({StoresData}) {
  return (
    <>
      <Layout title="home">
        TODO: This
        <section className='card'>
          <h2 className='title card-title'>Stores</h2>
          <StoreDisplay data={StoresData}></StoreDisplay>
        </section>
    </Layout>
    </>
  )
}
export async function getServerSideProps() {
  // Stores
  const StoresRes = await fetch(`/api/stores/get`)
  const StoresData = await StoresRes.json()
  // Pass data to the page via props
  return { props: { StoresData } }
}