const functions = require('./functions');

it('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});


it('Adds 2 + 3 to equal 5', () => {
    expect(functions.add(2, 3)).toBe(5);
});

it('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

test('LastName of user should be isToto', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Toto', lastName: 'IsToto' })
})

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john, karen', 'bob'];
    expect(usernames).toContain('bob')
})
