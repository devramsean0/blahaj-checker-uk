import StockCircle from "./circle";

export default function StockRender({data}) {
    return (
        <>
        {data.map(val => (
            <tr key={val.store.name}>
                <StockCircle data={val}/>
                <td>{val.store.name}</td>
                <td>{val.stock}</td>
            </tr>
        ))}
        </>
    )
}