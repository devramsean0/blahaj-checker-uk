import ikea from "ikea-availability-checker";
export default async function handler(_req, res) {
    var dataArr = [];
    const stores = ikea.stores.findByCountryCode("gb");
    for (const val of stores) {
      const buCode = val.buCode;
      const data = await ikea.availability(buCode, process.env["BLAHAJ_ID"])
      dataArr.push(data)
    }
    res.status(200).send(dataArr)
}
