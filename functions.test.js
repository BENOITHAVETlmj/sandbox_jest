const functions = require('./functions');


// beforeEach(() => initDataBase());
// afterEach(() => closeDataBase());


// const initDataBase = () => console.log('data base initialized...');
// const closeDataBase = () => console.log('data base initialized...');
const checkAuth = () => console.log('check authoziration...');

describe('Check authorization', () => {
   beforeEach(() => checkAuth());
   
   const loginForm = { login: 'loginTest', password: 'AaATII81'}
   test('User name is present', () => {
      expect(loginForm.login.length).toBeGreaterThanOrEqual(0)
   });
   test('Auth has good token', () => {
    expect(loginForm.password).toEqual('AaATII81')
 })
});

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

// Fetch async data
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})
