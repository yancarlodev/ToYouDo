import styled from 'styled-components/native'

export const View = styled.View`
    flex: 1;
    padding: 90px 20px 30px 20px;
    background-color: #E8EAED;
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
`

export const List = styled.View`
    margin-top: 30px;
`

export const InputWrapper = styled.KeyboardAvoidingView`
    margin-top: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Input =  styled.TextInput`
    background-color: white;
    padding: 16px;
    width: 80%;
    border-radius: 60px;
    text-align: center;
`

export const Button = styled.View`
    width: 60px;
    height: 60px;
    background-color: rgba(85, 188, 246, 1);
    border-radius: 52px;
    align-items: center;
    justify-content: center;
` 

export const Icon = styled.Text`
    color: white;
    font-size: 48px;
    font-weight: 300;
    line-height: 60px;
`