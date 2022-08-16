import styled from 'styled-components'
import {ReactComponent as Shopping} from '../../assets/shopping-bag.svg'

export const Cart_Icon_Container = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const Shoping_icon = styled(Shopping)`
width: 24px;
height: 24px;
`
export const Item_Count = styled.div`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 12px;
`

