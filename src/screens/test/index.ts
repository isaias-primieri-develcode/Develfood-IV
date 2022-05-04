import api from '../../service/api'

const USERS = 'https://gorest.co.in/public/v2/users'

export function GetUsers() {
  return api.get(USERS)
}

// axios.post('https://api.example.io/home/register', { email: "meuemail@email.com", senha: "123456" })
