import {addSkill, doesStudenLiveIs, makeStudenActive, studenType} from "./03";


let studen: studenType
beforeEach(() => {
    studen = {
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
})
test(`новый скилл должен добаивится`, () => {
    expect(studen.technologies.length).toBe(3);
    addSkill(studen, `JS`);
    expect(studen.technologies.length).toBe(4);
    expect(studen.technologies[3].title).toBe(`JS`);
    expect(studen.technologies[3].id).toBeDefined();

})

test(`студент должен быть активным`, () => {
    expect(studen.isActive).toBe(false);
    makeStudenActive(studen,);
    expect(studen.isActive).toBe(true);


})

test(`студент живет в городе`, () => {
    let resul1 = doesStudenLiveIs(studen, `Moskov`)
    let resul2 = doesStudenLiveIs(studen, `Minsk`)

    expect(resul1).toBe(false);
    expect(resul2).toBe(true);


})