import React, {setState, useEffect} from "react";
import styled from 'styled-components'

//const [homeWorld,setHomeworld] = useState("Homeworld is severely underrated")

const CardDiv = styled.div `
    

    width:95%;
    height:95%;
    margin:3%;
    background: rgba(195, 234, 234, 0.4);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border: inset;
    animation-duration:3s;
    animation-name: slidein;

    @keyframes slidein{
        from{
            margin-left:100%;
            width:300%;
        }
        to{
            margin-left:3%;
            width:95%;
        }
    }
    
    
    
    `;
 
const CardPara = styled.p `
    border:outset;


`;    
const BottomLi = styled.li `
    margin-bottom:3%;

`;
 


const ComponentCard = props =>{

    return(


        <CardDiv>
           <CardPara>Subject Name: {props.data.name}</CardPara>
            <li>Estimated Year of Origin: {props.data.birth_year}</li>
            <li>Mass: {props.data.mass} kg</li> 
            <BottomLi>Height: {props.data.height} cm</BottomLi>
        </CardDiv>



    )


}



export default ComponentCard;