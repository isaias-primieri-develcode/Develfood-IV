interface Response{
  token:string
  user:{
    name: string
    email: string

  }
}

export function signIn() : Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jafh3478qtyhg3784thyu34h8172therqy',
        user: {
          name: 'isaias',
          email: 'isaias@email.com',
        },
      })
    }, 2000)
  })
}
