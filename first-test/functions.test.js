
const functions = require('./functions');

//Testing for the add function
//first test: adding 2 positive numbers
test('Adds 2+2 = 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

//second test: adding 2 negative numbers
test('Adds -2+-2 = -4', () => {
    expect(functions.add(-2,-2)).toBe(-4);
});

//third test: adding 2 numbers correctly
test('Adds 2+2 not = 1', () => {
    expect(functions.add(2,2)).not.toBe(1);
});

//fourth test: adding 2 numbers correctly with 0 involved
test('Adds 0+1 =1', () => {
    expect(functions.add(0,1)).toBe(1);
});

//fifth test: Adding 2 nulls 
test('Adding 2 nulls', () => {
    expect(functions.add(null,null)).toBeFalsy();
});

//sixth test: Adding 1 null and a number
test('1 number is not inputted', () => {
    expect(functions.add(null,2)).toBeTruthy();
});

//Testing for the multiplication function
//first test: Multiply 2 positive numbers correctly
test('Multiplying 2 positive numbers correctly', () => {
    expect(functions.mult(2,4)).toBe(8);
});

//second test: Multiply 2 negative numbers correctly
test('Multiplying 2 negative numbers correctly', () => {
    expect(functions.mult(-2,-9)).toBe(18);
});

//third test: Multiply positive and negative number
test('Multiplying a positive and a negative number correctly', () => {
    expect(functions.mult(-4,5)).toBe(-20);
});

//fourth test: Multiply 0 and any number gives 0
test('Multiplying with 0', () => {
    expect(functions.mult(0,1)).toBe(0);
});

//Testing for returning Mike Wood correctly
test('Should return user name: Mike Wood', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Mike', lastName: 'Wood' });
});

//Testing for fetchUser function 
//Expecting to get Leanne Graham: working with async data with axios
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
});

//Expecting to get Leanne Graham: using async await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
});







