import {CityType, governmentBuildingsTpe} from "../02/02";

const ages = [19, 43, 100, 86, 3, 11, 43, 21, 65,]

const predicate = (age: number) => {
   return age > 50;
}


const oldAges = [100]


const courses = [
   {title: `CSS`, price: 110},
   {title: `JS`, price: 200},
   {title: `REACT`, price: 150},
]

type curseTYpe = {
   title: string
   price: number
}

const chipPredicate = (curses: curseTYpe) => {
   return curses.price < 160
}


export function demolishHousesOnTheStreet(city: CityType, Street: string) {
   city.houses = city.houses.filter((h) => h.address.street.title !== Street)
}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings: Array<governmentBuildingsTpe>, number: number) {

   return governmentBuildings.filter((w) => w.staffCount > number)

}