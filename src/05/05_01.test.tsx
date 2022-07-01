import {ManType} from "./05_01";


let people: Array<ManType>

beforeEach(() => {
   people = [
      {name: `Andrew Ivanov`, age: 33},
      {name: `Alexander Petrov`, age: 24},
      {name: `Dmitry Sidorov`, age: 18},
   ]

})

test(`возвращает привественое ообщение`, () => {

   const messages = people.map(man => `hello ${man.name.split(` `)[0]} welkome`)

   expect(messages.length).toBe(3)
   expect(messages[0]).toBe(`hello Andrew welkome`)
   expect(messages[1]).toBe(`hello Alexander welkome`)
   expect(messages[2]).toBe(`hello Dmitry welkome`)
})