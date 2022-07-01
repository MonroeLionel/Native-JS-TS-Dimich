export type streetType = {
    title: string
}
export type addressType = {
    number: number
    street: streetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: addressType
    id?: number
}
export type governmentAddressStreetType = {
    title: string
}
export type governmentAddressType = {
    street: governmentAddressStreetType
}
export type governmentBuildingsTpe = {
    type: `HOSPITAL` | `FIRE-STATION`
    budget: number
    staffCount: number
    address: governmentAddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<governmentBuildingsTpe>
    citizensNumber: number

}