import React from 'react';
import { Button, ButtonGroupContainer } from '../../Pages/landingPage/LandingPageStyled';

const ButtonNavigation = ({ navValue, data, setData }) => {
    return (
        <ButtonGroupContainer Gap="10px">
            {navValue.map((value, idx) => (
                <Button
                    key={idx}
                    style={{
                        color: data === value && "black",
                        background: data === value && "gray",
                    }}
                    onClick={() => setData(value)}
                >
                    {value}
                </Button>
            ))}
        </ButtonGroupContainer>
    );
};

export default ButtonNavigation;