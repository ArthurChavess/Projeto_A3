import axios from 'axios'

let db = {}
const dbReq = await axios('http://localhost:3000/db').then((res) => db = res.data).catch((error) => console.log(error))

console.log(dbReq);

export default db