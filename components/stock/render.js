export default function StockRender({data}) {
    return (
        <>
        {data.map(val => (
            <tr key={val.store.name}>
                <td>{val.store.name}</td>
                <td>{val.stock}</td>
            </tr>
        ))}
        </>
    )
}