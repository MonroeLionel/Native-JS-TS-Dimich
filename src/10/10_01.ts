export type UserType = {
   name: string
   hair: number
   address: { city: string, house?: number }
}

export type LaptopTpe = {
   title: string
}

export type UserWithLaptopType = UserType & {
   laptop: LaptopTpe
}

export type UserWithBookType = UserType & {
   books: Array<string>
}

export type WithCompaniesType = UserType & {
   companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number) {
   const copy = {
      ...u,
      hair: u.hair / power
   }
   return copy
}

export function moveUser(user: UserWithLaptopType, city: string) {
   const copy = {
      ...user,
      address: {
         ...user.address,
         city: city
      }
   }
   return copy
}

export function upgradeUserLaptop(user: UserWithLaptopType, laptop: string) {
   const copy = {
      ...user,
      laptop: {
         ...user.laptop,
         title: laptop
      }
   }
   return copy
}

export function moveUserTToOtherHouse(user: UserWithLaptopType & UserWithBookType, house: number) {
   const copy = {
      ...user,
      address: {
         ...user.address,
         house: house
      }
   }
   return copy
}

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBookType, newBook: Array<string>) {
   const copy = {
      ...user,
      books: [...user.books, ...newBook]
   }
   return copy
}

export function updateBook(user: UserWithLaptopType & UserWithBookType, oldBook: string, newBook: string) {
   const copy = {
      ...user,
      books:
        user.books.map((b) => b === oldBook ? newBook : b)

   }
   return copy
}

export function removeBook(user: UserWithLaptopType & UserWithBookType, remove: string) {
   const copy = {
      ...user,
      books:
        user.books.filter((b) => b !== remove)

   }
   return copy
}

export function addCompany(user: UserWithLaptopType & WithCompaniesType, company: string) {
   const copy = {
      ...user,
      companies: [...user.companies, {id: 3, title: company}]


   }
   return copy
}


export function updateCompany(user: UserWithLaptopType & WithCompaniesType, id: number, company: string) {
   const copy = {
      ...user,
      companies: user.companies.map(c => c.id === id ? {...c, title: company} : c)


   }
   return copy
}

export   type companiesType = {
   [name: string]: Array<{ id: number, title: string }>
}

export function updateCompany2(companies: companiesType, userName: string, companyID: number, newTitle: string) {
   let copy = {...companies}
   copy[userName] = copy[userName].map(b => b.id === companyID ? {...b, title: newTitle} : b)


   /*  const copy = {
        ...companies,
        ...companies[userName].map(b => b.id === companyID ? {...b, title: newTitle} : b)


     }*/
   return copy
}

