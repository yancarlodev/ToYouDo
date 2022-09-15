import * as S from './styles'

interface ICardProps {
    text: string
}

export default function Card({ text }: ICardProps) {
    return(
        <S.Card>
            <S.LeftContainer>
                <S.Square/>
                <S.Text>{text}</S.Text>
            </S.LeftContainer>
            <S.Circle/>
        </S.Card>
    )
}