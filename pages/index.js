import Layout from '../components/layout'
export default function Home({data}) {
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
              <th>Location</th>
              <th>Stock</th>
            </tr>
            <tr>
              <td>{data[0].store.name}</td>
              <td>{data[0].stock}</td>
            </tr>
            {data.map((val) => {
              <tr>
                <td>{val.store.name}</td>
                <td>{val.stock}</td>
                </tr>
            })}
          </table>
        </section>
    </Layout>
    </>
  )
}
export async function getServerSideProps() {
  if (process.env["NODE_ENV"] == "development") {
    const response = await fetch("http://localhost:3000/api/stores")
    const data = await response.json()
    return { props: {data}}
  } else {
    const response = await fetch("http://blahajcheckeruk.sean.cyou/api/stores")
    const data = await response.json()
    return { props: {data}}
  }
}