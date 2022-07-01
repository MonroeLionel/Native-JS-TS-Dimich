export type ManType = {
   name: string
   age: number
}

const people: Array<ManType> = [
   {name: `Andrew Ivanov`, age: 33},
   {name: `Alexander Petrov`, age: 24},
   {name: `Dmitry Sidorov`, age: 18},
]

//короткая запись без ретурна

const dimichTransformator = (man: ManType) => ({
   stack: [`css,html`, `js`, `tdd`, `react`],
   firstName: man.name.split(` `)[0],
   lastName: man.name.split(` `)[1],
})

const dev3 = people.map(dimichTransformator)
const dev4 = people.map(man => ({
   stack: [`css,html`, `js`, `tdd`, `react`],
   firstName: man.name.split(` `)[0],
   lastName: man.name.split(` `)[1],
}))

//берем массив и обращаемся по имени здароваемся и добро пожаловать split делить строку по пробелу [0] берет первый элемент
const messages = people.map(man => `hello ${man.name.split(` `)[0]} welkome`)

