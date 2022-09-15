import styled from 'styled-components/native'

export const Card = styled.View`
    background-color: white;
    border-radius: 10px;
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export const Text = styled.Text`
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto';
    max-width: 80%;
`

export const Square = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    border-radius: 5px;
    background: rgba(85, 188, 246, 0.4);
    margin-right: 15px;
`

export const LeftContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Circle = styled.View`
    width: 12px;
    height: 12px;
    border: 2px solid rgba(85, 188, 246, 1);
    border-radius: 5px;
`