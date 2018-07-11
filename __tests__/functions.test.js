const functions = require('../functions');

describe('testing add function', () => {
    test('add 2 positive numbers', () => {
        expect(functions.add(2,2)).toBe(4);
    });

    test('add numbers correctly', () => {
        expect(functions.add(2,2)).not.toBe(1);
    });

    test('add 2 negative numbers', () => {
        expect(functions.add(-2,-2)).toBe(-4);
    });

    test('add numbers with 0', () => {
        expect(functions.add(0,1)).toBe(1);
    });

    test('add 2 nulls', () => {
        expect(functions.add(null,null)).toBeFalsy();
    });

    test('add a null and a number', () => {
        expect(functions.add(null,2)).toBeFalsy();
    });
});

describe('testing multiplication function', () => {
    test('Multiply 2 positivews', () => {
        expect(functions.mult(2,4)).toBe(8);
    });

    test('Multiply 2 negatives', () => {
        expect(functions.mult(-2,-9)).toBe(18);
    });

    test('Multiply a positive and a negative', () => {
        expect(functions.mult(-4,5)).toBe(-20);
    });

    test('Multiply with 0', () => {
        expect(functions.mult(0,1)).toBe(0);
    });
});

describe('testing createUser function', () => {
    test('Should return user name: Mike Wood', () => {
        expect(functions.createUser()).toEqual({ firstName: 'Mike', lastName: 'Wood' });
    });
});

describe('testing fetchUser function', () => {
    test('User name should be Leanne Graham', () => {
        expect.assertions(1);
        return functions.fetchUser()
            .then(data => {
                expect(data.name).toEqual('Leanne Graham');
            })
    });

    test('Using async wait to get Leanne Graham', async() => {
        expect.assertions(1);
        const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
    });
});

describe('remove names start with K', () => { 
    test('should remove all K names', () => {
        const names = ['Kathy', 'Katie', 'Steve'];
        expect(functions.removeKNames(names)).not.toContain('Katie');
        expect(functions.removeKNames(names)).not.toContain('Kathy');
    });

    test('should not remove other names', () => {
        const names = ['Ruth', 'Katie', 'Wendy'];
        expect(functions.removeKNames(names)).toContain('Ruth');
        expect(functions.removeKNames(names)).toContain('Wendy');
    });

    test('should account for case', () => {
        const names = ['Kate', 'Ruth', 'Wendy', 'kate'];
        expect(functions.removeKNames(names)).not.toContain('Kate');
        expect(functions.removeKNames(names)).not.toContain('kate');
    });
});