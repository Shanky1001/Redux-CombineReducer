import React from 'react';
import { Box, Button, Card, Stack, TextField } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { BuyCakes, BuyChocolate, BuyIceCream, Input } from './Redux/Actions';

const Main = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    return (
        <div className="mainContainer">
            
            <Box background="surface" borderRadius="2" padding="10" shadow="card">
                <Card sectioned title={`Number of Cakes  : ${state.cake}`}>
                    <Stack vertical>
                        <TextField value={state.Inputs.cakeInp} onChange={(e) => dispatch(Input('cakeInp', e))}  placeholder="Enter quantity" />
                        <Button primary onClick={() => dispatch(BuyCakes(state.Inputs.cakeInp))}>
                            Buy Cakes
                        </Button>
                    </Stack>
                </Card>
            </Box>

            <Box background="surface" borderRadius="2" padding="10" shadow="card">
                <Card sectioned title={`Number of Ice creams  : ${state.iceCream}`}>
                    <Stack vertical>
                        <TextField value={state.Inputs.iceCreamInp} onChange={(e) => dispatch(Input('iceCreamInp', e))}  placeholder="Enter quantity" />
                        <Button primary onClick={() => dispatch(BuyIceCream(state.Inputs.iceCreamInp))}>
                            Buy Ice Creams
                        </Button>
                    </Stack >
                </Card>
            </Box>

            <Box background="surface" borderRadius="2" padding="10" shadow="card">
                <Card sectioned title={`Number of Chocolates  : ${state.Chocolate}`}>

                    <Stack vertical>
                        <TextField value={state.Inputs.chocolateInp} onChange={(e) => dispatch(Input('chocolateInp', e))}  placeholder="Enter quantity" />
                        <Button primary onClick={() => dispatch(BuyChocolate(state.Inputs.chocolateInp))}>
                            Buy Chocolate
                        </Button>
                    </Stack>
                </Card>
            </Box>
        </div>
    )
}

export default Main
