import {CityType} from "../02/02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_01";

test(` нужно вернуть массив старше 90`, () => {
   const ages = [19, 43, 100, 86, 3, 11, 43, 21, 65,]

   // const predicate = (age: number) => {
   //    return age > 90;
   // } сокращенные записи ниже

   // const predicate = (age: number) => age > 90;


   const oldAges = ages.filter((age) => age > 90)

   expect(oldAges.length).toBe(1)
   expect(oldAges[0]).toBe(100)
})

test(` нужны курсы дешевле 160`, () => {
   const courses = [
      {title: `CSS`, price: 110},
      {title: `JS`, price: 200},
      {title: `REACT`, price: 150},
   ]
   // const chipPredicate = (curses: curseTYpe) => {
   //    return curses.price < 160
   // } сокращенные записи ниже
   const chipCurses = courses.filter((curses) => curses.price < 160)


   expect(chipCurses.length).toBe(2)
   expect(chipCurses[0].title).toBe(`CSS`)
   expect(chipCurses[1].title).toBe(`REACT`)
})


test(`получить таски которые выполнены `, () => {
   const task = [
      {id: 1, title: `Bread`, isDone: false},
      {id: 2, title: `Milk`, isDone: true},
      {id: 3, title: `Solt`, isDone: false},
      {id: 4, title: `Sugar`, isDone: true},
   ]
   const complitedTask = task.filter((task) => task.isDone)

   expect(complitedTask.length).toBe(2)
   expect(complitedTask[0].id).toBe(2)
   expect(complitedTask[1].id).toBe(4)

})
let city: CityType
city = {
   title: "New York",
   houses: [{id: 1, buildedAt: 2012, repaired: false, address: {number: 100, street: {title: `White street`}}},
      {id: 2, buildedAt: 2008, repaired: false, address: {number: 100, street: {title: `Happy street`}}},
      {id: 3, buildedAt: 2020, repaired: false, address: {number: 101, street: {title: `Happy street`}}}],
   governmentBuildings: [{
      type: `HOSPITAL`,
      budget: 200000,
      staffCount: 200,
      address: {street: {title: `Central Str`}}
   }, {
      type: `FIRE-STATION`,
      budget: 500000,
      staffCount: 1000,
      address: {street: {title: `South Str`}}
   }
   ],
   citizensNumber: 1000000
}

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли


test('House should be destroyed', () => {
   demolishHousesOnTheStreet(city, 'Happy street');

   expect(city.houses.length).toBe(1);
   expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
   let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

   expect(buildings.length).toBe(1);
   expect(buildings[0].type).toBe('FIRE-STATION')
})