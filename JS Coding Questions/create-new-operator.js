/**
 * https://bigfrontend.dev/problem/create-your-own-new-operator
 */

function Shape(x, y) {
    this.x = x;
    this.y = y;
}

let sh = new Shape(4, 5)

console.log(sh);

function myNew(constructorFuc, ...args) {
    let obj = {};

    Object.setPrototypeOf(obj, constructorFuc.prototype)

    let res = constructorFuc.call(obj, ...args);

    // if constructor returns something we should return insted of returning the obj.
    // Not happen in most cases. But it's good to have
    if(res && typeof res === 'object') {
        return res;
    }

    return obj;
}

let sh1 = myNew(Shape, 4, 5)

console.log(sh1);