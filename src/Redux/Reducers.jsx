import { BUY_CAKES, BUY_CHOCOLATE, BUY_ICECREAM, INPUTS } from "./Actions";
import { combineReducers } from 'redux';

export const initialState = {
    Chocolate: 50, Cakes: 50, iceCream: 50, inputs: { cakeInp: '', iceCreamInp: '', chocolateInp: '' }
}

const CakeReducer = (state = initialState.Cakes, action) => {
    switch (action.type) {
        case BUY_CAKES:
            if (action.payload === '') {
                alert('No value entered')
                return state
            }
            else if (action.payload <= state)
                return state - +action.payload
            else {
                alert('Ordered quantity is more than stock');
                return state
            }

        default:
            return state
    }
}

const IceCreamReducer = (state = initialState.iceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            if (action.payload === '') {
                alert('No value entered')
                return state
            }
            else if (action.payload <= state)
                return state - +action.payload
            else {
                alert('Ordered quantity is more than stock');
                return state
            }

        default:
            return state
    }
}

const ChocolateReducer = (state = initialState.Chocolate, action) => {
    switch (action.type) {
        case BUY_CHOCOLATE:
            if (action.payload === '') {
                alert('No value entered')
                return state
            }
            else if (action.payload <= state)
                return state - +action.payload
            else {
                alert('Ordered quantity is more than stock');
                return state
            }

        default:
            return state
    }
}

const InputsReducer = (state = initialState.inputs, action) => {
    switch (action.type) {
        case INPUTS:
            return { ...state, [action.key]: action.value }

        default:
            return state
    }
}

export const rootReducer = combineReducers({ cake: CakeReducer, iceCream: IceCreamReducer, Chocolate: ChocolateReducer, Inputs: InputsReducer })
