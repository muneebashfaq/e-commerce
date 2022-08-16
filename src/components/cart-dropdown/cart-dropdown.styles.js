import styled from 'styled-components'

export const Cart_dropdown = styled.div`
position: absolute;
width: 280px;
height: 380px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
button {
  margin-top: auto;
}
`

export const Cart_items = styled.div`
height: 280px;
display: flex;
flex-direction: column;
overflow: auto;
`

export const EmptyMessage = styled.span`
font-size:28px;
margin:58 auto;
`
