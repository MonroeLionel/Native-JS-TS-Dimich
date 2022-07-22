function increasedAge(u: UserType) {
   u.age++;
}

type UserType = {
   name: string
   age: number
   address: { title: string }
}


test('big test', () => {
     let user: UserType = {
        name: 'Dimych',
        age: 32
     }

     increasedAge(user)
     expect(user.age).toEqual(33)
     const superman = user
     superman.age = 1000
     expect(user.age).toEqual(1000)

  }
)


test('array test', () => {
     let users = [
        {
           name: 'Dimych',
           age: 32
        }, {
           name: 'Dimych',
           age: 32
        }
     ]
     const admins = users
     admins.push({name: 'Bandygan', age: 10})
     expect(users[2]).toEqual({name: 'Bandygan', age: 10})


  }
)

test('value tpe test', () => {
     let usersCount = 100
     let adminCount = usersCount
     adminCount = adminCount + 1


     expect(adminCount).toBe(101)


  }
)


test('big test', () => {
     let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
           title: 'Minsk'
        }
     }

     let addr = user.address
     let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address

     }
     user2.address.title = 'Kanary'
     expect(user.address.title).toBe('Kanary')

  }
)


test('big test', () => {
     const addres = {
        title: 'Minsk'
     }
     let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: addres
     }

     let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addres

     }
     const usersTest = [user, user2, {name: 'Misha', age: 4, address: addres}]

     const admin = [user, user2]
     admin[0].name = 'Dmitry'
     expect(user.name).toBe('Dmitry')
     expect(usersTest[0].name).toBe('Dmitry')

  }
)