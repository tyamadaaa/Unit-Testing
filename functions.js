const axios = require('axios');

const functions = {
    add: (x,y) => {
        if(typeof x !== 'number' || typeof y !== 'number') {
            return null;
        } else {
            return x + y;
        }
        },
    mult: (num1,num2) => num1 * num2,
    createUser: () => {
        const user = { firstName: 'Mike' }
        user['lastName'] = 'Wood';
        return user
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error'),
    removeKNames: (names) => { 
        return names.filter(names => names.toLowerCase().charAt(0) !== 'k');
    },
};

module.exports = functions;