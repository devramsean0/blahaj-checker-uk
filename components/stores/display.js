
export default function StoreDisplay({data}) {
   var string;
   data.forEach(val, i => {
        if (i == 0) {
            string = `
            <tr>
            <td>
            ${val.name}
            </td>
            <td>
            ${val.buCode}
            </td>
            </tr>
            `
        } else {
            string = `
            ${string}
            <tr>
            <td>
            ${val.name}
            </td>
            <td>
            ${val.buCode}
            </td>
            </tr>
            `
        }
   });
   return (
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Store Code</th>
        </tr>
        {string}
    </table>
   )
}