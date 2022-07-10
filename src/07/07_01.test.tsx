type ManType = {
   name: string
   age: number
   lessons: Array<{ title: string }>
   address: {
      street: {
         title: string
      }
   }
}
let props: ManType
beforeEach(() => {
   props = {
      name: `dimixh`,
      age: 32,
      lessons: [{title: `1`}, {title: `2`}],
      address: {
         street: {
            title: `naxvanie`
         }
      }
   }
})

test(``, () => {

   // const age = props.age
   // const lessons = props.lessons
   //дуструктурирующее присваивание
   const {age, lessons} = props;

   expect(age).toBe(32)
   expect(lessons.length).toBe(2)

})

test(``, () => {
   const l1 = props.lessons[0]
   const l2 = props.lessons[1]

   const [ls1, ls2] = props.lessons

   expect(l1.title).toBe(`1`)
   expect(l2.title).toBe(`2`)

   expect(ls1.title).toBe(`1`)
   expect(ls2.title).toBe(`2`)

})