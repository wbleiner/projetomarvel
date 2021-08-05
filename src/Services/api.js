import axios from "axios"
import md5 from "md5"

const publicKey = "a87da4cc90eef0200580786b1e1c502c"
const privateKey = "be2b59f5247df57277e1a0244a4f8fe3870efd86"
const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

const api = (urlRequire)=>{
    return axios.get(`${urlRequire}?ts=${time}&apikey=${publicKey}&hash=${hash}`,)
}
export default api