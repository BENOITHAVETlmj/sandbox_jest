const functions = {
    add: (number1, number2) => number1 + number2,
    isNull: () => null, 
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Toto'};
        user['lastName'] = 'IsToto';
        return user;
    }
}

module.exports = functions;