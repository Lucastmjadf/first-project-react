import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
width:100vw;
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
display:flex;
justify-content:center;
align-items:center;
`

export const Section = styled.section`
width:1000px;
min-height:500px;
background: #FFFFFF;
border-radius: 5px;
padding:30px 50px;
display:flex;
flex-direction:column; 
header{
    display:flex;
justify-content:space-between;
}
h1{
    text-align:center;
    margin-top:100px
}
`
export const Li = styled.li`
height: 100px;
background: ${ props => props.conclued ? '#E8FF8B ':'#E4E4E4'};
border:${ props => props.conclued ? '3px solid #ffd700':'none'};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
list-style:none;
margin-bottom:30px;
display:flex;
justify-content:center;
align-items:center;
justify-content:space-between;
padding:0 30px;
.icons{
    font-size:30px;
    cursor: pointer;
}
.icons:hover{
    font-size:35px;   
}
`
export const Input = styled.input`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
height: 18px; 
width:60%;
padding-left:15px;
margin-bottom:20px;
border-radius: 5px;
height: 40px;
outline:none;
`
export const Button = styled.button`
width: 130px;
height: 40px;
background: #8052EC;
border-radius: 5px;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: #FFFFFF;
border:none;
&:hover{
    opacity:0.8 ;
}
&:active{
    width: 125px;
    height: 35px;
}
`
export const ContainerText = styled.div`
text-align: center;
width:800px;
`


