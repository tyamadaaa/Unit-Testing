import { hello, add, removeKNames } from './App';

//Hello function should return "hello"
describe('hello function', () => {
    test('should return hello', () => {
        expect(hello()).toBe('Hello');
    });
});

//Testing add function with various situations
//Should correctly add 2 positive numbers
describe('add function', () => {
    test('should add 2 numbers', () => {
        expect(add(1,2)).toBe(3);
        expect(add(0,2)).toBe(2);
        expect(add(1,2)).toBe(3)
    });

//Should not add things other than intergers 
    test('should not add strings', () => {
        expect(add(2,'2')).toBe(null);
    });

    test('should not add objects', () => {
        expect(add(2,{})).toBe(null);
    });

    test('should not add arrays', () => {
        expect(add(2,[])).toBe(null);
    });
});

//Testing removeKNames function in various situation
//Should remove names starting with K
describe('removing names start with K', () => { 
    test('should remove all K names', () => {
        const names = ['Kathy', 'Katie', 'Steve'];
        expect(removeKNames(names)).not.toContain('Katie');
        expect(removeKNames(names)).not.toContain('Kathy');
    });

//Should not remove names that starts with K
    test('should not remove other names', () => {
        const names = ['Ruth', 'Katie', 'Wendy'];
        expect(removeKNames(names)).toContain('Ruth');
        expect(removeKNames(names)).toContain('Wendy');
    });

//Should account for case when removing
    test('should account for case', () => {
        const names = ['Kate', 'Ruth', 'Wendy', 'kate'];
        expect(removeKNames(names)).not.toContain('Kate');
        expect(removeKNames(names)).not.toContain('kate');
    });
});