import {mult, sum} from "./01";


let a: number
let b: number
let c: number
//beforeEach вызывается перед каждым тестом что бы обновить значения переменных
//в случаех когда переменные повторно используются в тесте и как то меняются
beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test(`считаем сумму`, () => {
    //data исходные данные вынесли в beforeEach


    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expect result ожидаемый результат
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test(`умножение`, () => {
    //data


    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})