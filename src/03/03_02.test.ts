import {addMoneyToBudget, creatMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
import {CityType} from "../02/02";


let city2: CityType


beforeEach(() => {
    city2 = {
        title: "New York",
        houses: [{buildedAt: 2012, repaired: false, address: {number: 100, street: {title: `White street`}}},
            {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: `Happy street`}}},
            {buildedAt: 2020, repaired: false, address: {number: 101, street: {title: `Happy street`}}}],
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
})
// 01. создайте в отдельном файле функциюб чтобы тесты прошли

test("Budget should be for changed fot HOSPITAL", () => {
    addMoneyToBudget(city2.governmentBuildings[0], 100000);
    expect(city2.governmentBuildings[0].budget).toBe(300000);
});


// 01. Тест должен пройти


test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city2.governmentBuildings[1], -100000);

    expect(city2.governmentBuildings[1].budget).toBe(400000);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("House shoulhd be repared", () => {
    repairHouse(city2.houses[1]);
    expect(city2.houses[1].repaired).toBeTruthy();
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("staff should be increased", () => {
    toFireStaff(city2.governmentBuildings[0], 20);

    expect(city2.governmentBuildings[0].staffCount).toBe(180);
});


// 01. создайте в том же файле еще одну функцию, чтобы тесты прошли


test("House sholhd be repared", () => {
    toHireStaff(city2.governmentBuildings[0], 20);

    expect(city2.governmentBuildings[0].staffCount).toBe(220);
});

test(`gjplhfdktybt`, () => {
    const message = creatMessage(city2)
    expect(message).toBe(`привет все New York всем 1000000 людям`)
})