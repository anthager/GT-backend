import axios from 'axios'
import { api } from '../../utils/Variables'

export async function isAuthed() {
  const jwt = localStorage.getItem('jwt')
  if (jwt) {
    const res = await axios.get(`${api}/restricted`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    return res.status === 200
  } else {
    await fakeRequest()
    return false
  }
}

function fakeRequest() {
  return new Promise(res => {
    setTimeout(() => {
      res(true)
    }, 1000)
  })
}
// export function isAuthed() {
//   return false
// }
