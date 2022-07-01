import {governmentBuildingsTpe, HousesType} from "../02/02";


export function getStreetsTitlesOfGovernmentBuildings(Buildings: Array<governmentBuildingsTpe>) {
   return Buildings.map((Buildings) => Buildings.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HousesType>) {
   return houses.map((houses) => houses.address.street.title)
}

export function createMessage(houses: Array<HousesType>) {
   return houses.map((houses) => `Hello guy from ${houses.address.street.title}`)
}
