import {
   addCompany,
   addNewBooksToUser,
   makeHairStyle,
   moveUser,
   moveUserTToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2,
   upgradeUserLaptop,
   UserType,
   UserWithBookType,
   UserWithLaptopType, WithCompaniesType
} from "./10_01";

test('reference type ttest', () => {
   let user: UserType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk'
      }
   }


   const awesomeUser = makeHairStyle(user, 2)

   // user = awesomeUser

   expect(user.hair).toBe(32)
   expect(awesomeUser.hair).toBe(16)
   expect(awesomeUser.address).toBe(user.address)

})

test('change address', () => {
   let user: UserWithLaptopType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      }
   }


   const movedUser = moveUser(user, 'Kiev')

   // user = movedUser

   expect(user).not.toBe(movedUser)
   expect(user.address).not.toBe(movedUser.address)
   expect(user.laptop).toBe(movedUser.laptop)
   expect(movedUser.address.city).toBe("Kiev")

})


test('upgrade laptop to macbook', () => {
   let user: UserWithLaptopType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      }
   }


   const movedUser = upgradeUserLaptop(user, 'MacBook')

   // user = movedUser

   expect(user).not.toBe(movedUser)
   expect(user.laptop).not.toBe(movedUser.laptop)
   expect(user.address).toBe(movedUser.address)
   expect(movedUser.laptop.title).toBe("MacBook")
   expect(user.laptop.title).toBe("ZenBook")

})


test('upgrade laptop to macbook', () => {
   let user: UserWithLaptopType & UserWithBookType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      },
      books: ['css', 'html', 'js', 'react']
   }


   const movedUser = moveUserTToOtherHouse(user, 99)

   // user = movedUser

   expect(user).not.toBe(movedUser)
   expect(user.laptop).toBe(movedUser.laptop)
   expect(user.books).toBe(movedUser.books)
   expect(user.address).not.toBe(movedUser.address)

   expect(user.address.house).toBe(99)

})


test('add new book to user', () => {
   let user: UserWithLaptopType & UserWithBookType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      },
      books: ['css', 'html', 'js', 'react']
   }


   const movedUser = addNewBooksToUser(user, ['ts', 'rest api'])

   // user = movedUser

   expect(user).not.toBe(movedUser)
   expect(user.laptop).toBe(movedUser.laptop)
   expect(user.address).toBe(movedUser.address)
   expect(user.books).not.toBe(movedUser.books)
   expect(movedUser.books[4]).toBe('ts')
   expect(movedUser.books[5]).toBe('rest api')

})


test('update js to ts', () => {
   let user: UserWithLaptopType & UserWithBookType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      },
      books: ['css', 'html', 'js', 'react']
   }


   const userCopy = updateBook(user, 'js', 'ts')

   // user = movedUser

   expect(user).not.toBe(userCopy)
   expect(user.laptop).toBe(userCopy.laptop)
   expect(user.address).toBe(userCopy.address)
   expect(user.books).not.toBe(userCopy.books)
   expect(userCopy.books[2]).toBe('ts')

})

test('remove book js', () => {
   let user: UserWithLaptopType & UserWithBookType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      },
      books: ['css', 'html', 'js', 'react']
   }


   const userCopy = removeBook(user, 'js')

   // user = movedUser

   expect(user).not.toBe(userCopy)
   expect(user.laptop).toBe(userCopy.laptop)
   expect(user.address).toBe(userCopy.address)
   expect(user.books).not.toBe(userCopy.books)
   expect(userCopy.books[2]).toBe('react')

})

test('remove book js', () => {
   let user: UserWithLaptopType & WithCompaniesType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      },
      companies: [
         {id: 1, title: 'Epam'},
         {id: 2, title: 'IT-INCUBAOR'},

      ]
   }


   const userCopy = addCompany(user, 'Google')

   // user = movedUser

   expect(user).not.toBe(userCopy)
   expect(user.laptop).toBe(userCopy.laptop)
   expect(user.address).toBe(userCopy.address)
   expect(user.companies).not.toBe(userCopy.companies)
   expect(userCopy.companies[2]).toBe('Google')

})

test('update company', () => {
   let user: UserWithLaptopType & WithCompaniesType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      },
      companies: [
         {id: 1, title: 'Епам'},
         {id: 2, title: 'IT-INCUBAOR'},

      ]
   }


   const userCopy = updateCompany(user, 1, 'Epam')

   // user = movedUser

   expect(user).not.toBe(userCopy)
   expect(user.laptop).toBe(userCopy.laptop)
   expect(user.address).toBe(userCopy.address)
   expect(user.companies).not.toBe(userCopy.companies)
   expect(userCopy.companies[0].title).toBe('Epam')
   expect(userCopy.companies[0].id).toBe(1)

})

test('update company arr', () => {
   let user: UserWithLaptopType = {
      name: 'Dimych',
      hair: 32,
      address: {
         city: 'Minsk',
         house: 12
      },
      laptop: {
         title: "ZenBook"
      },

   }
   let companies = {
      'Dimych': [{id: 1, title: 'Епам'},
         {id: 2, title: 'IT-INCUBAOR'},],
      'Artem': [{id: 1, title: 'IT-INCUBAOR'},]
   }

   const companiesCopy = updateCompany2(companies, 'Dimych', 1, 'EPAM')

   // user = movedUser

   expect(companies['Dimych']).not.toBe(companiesCopy['Dimych'])
   expect(companies['Artem']).toBe(companiesCopy['Artem'])
   expect(companiesCopy['Dimych'][0].title).toBe('EPAM')


})