type userstype = {
   [key: string]: { name: string, id: number }
}
let users: userstype = {}

beforeEach(() => {
   users = {
      '101': {id: 101, name: `Dimych`},
      '1212': {id: 1212, name: `Naasha`},
      '123123123': {id: 123123123, name: `Valera`},
      '1': {id: 1, name: `Katya`},
   }
})

test(`обновить пользователя`, () => {

     // users['1'].name = 'Ekaterina'
     users['1'] = {id: 1, name: `Ekaterina`},

       expect(users['1'].name).toBe('Ekaterina')
  }
)

test(`удалить пользователя`, () => {

     // users['1'].name = 'Ekaterina'
     delete users['1']

     expect(users['1']).toBeUndefined()
  }
)