

export const BUY_CAKES = 'Buy Cakes';
export const BUY_ICECREAM = 'Buy Ice Cream'
export const BUY_CHOCOLATE = 'Buy Chocolate'
export const INPUTS = 'Inputs';

export const BuyCakes = (quantity) => {
    return {
        type: BUY_CAKES, payload: quantity
    }
}

export const BuyChocolate = (quantity) => {
    return {
        type: BUY_CHOCOLATE, payload: quantity
    }
}

export const BuyIceCream = (quantity) => {
    return {
        type: BUY_ICECREAM, payload: quantity
    }
}

export const Input = (key, quantity) => {
    return {
        type: INPUTS, key: key, value: quantity
    }
}