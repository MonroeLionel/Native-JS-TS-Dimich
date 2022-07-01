import {CityType, governmentBuildingsTpe, HousesType} from "../02/02";

const studen = {
    id: 1,
    name: `Dimych`,
    isActive: false,
    address: {
        streetTitle: `Surganova 2`,
        city: {
            title: `Minsk`,
            countryTitle: `Belarus`
        }
    },
    technologies: [
        {
            id: 1,
            title: `HTML`
        },
        {
            id: 2,
            title: `CSS`,
        },
        {
            id: 3,
            title: `React`
        }
    ]
}

export type studenType = {
    id: number
    name: string
    isActive: boolean
    address: addressType
    technologies: Array<technologiesType>
}
export type addressType = {
    streetTitle: string
    city: cityType
}
export type cityType = {
    title: string
    countryTitle: string
}
export type technologiesType = {
    id: number
    title: string
}

export const addSkill = (studen: studenType, skill: string) => {
    studen.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudenActive(s: studenType) {
    s.isActive = true
}

export function doesStudenLiveIs(s: studenType, sity: string) {

    return s.address.city.title === sity

}


export function addMoneyToBudget(governmentBuildingsTpe: governmentBuildingsTpe, money: number) {
    governmentBuildingsTpe.budget += money;
}

export function repairHouse(housesType: HousesType) {
    housesType.repaired = true
}

export function toFireStaff(governmentBuildingsTpe: governmentBuildingsTpe, number: number) {
    governmentBuildingsTpe.staffCount -= number
}

export function toHireStaff(governmentBuildingsTpe: governmentBuildingsTpe, number: number) {
    governmentBuildingsTpe.staffCount += number
}

export function creatMessage(city2: CityType) {
    // return `привет все ` + city2.title + " всем " + city2.citizensNumber + ` людям`
    return `привет все ${city2.title} всем ${city2.citizensNumber} людям`
}