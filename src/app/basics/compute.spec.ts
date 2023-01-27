import {compute} from './compute';

describe ('compute - Rudgery Lopes S00214383', () => {
    it ('should return 0 if the input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
});

it ("should return input+1 if the input is positive", () =>{

    const result = compute(1);
    expect(result).toBe(2)
})

xit ("should fail once the compute value is less than 0", () =>{

    const result = compute(1);
    expect(result).toBe(0)
})