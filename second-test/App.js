
export const hello = () => 'Hello';

export const add = (x,y) => {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return null;
    };
    return x + y;
};

export const removeKNames = names => {
    return names.filter(name => name.toLowerCase().charAt(0) !== 'k');
};
