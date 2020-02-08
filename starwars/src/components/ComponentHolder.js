import React, {useState, useEffect} from "react";
import axios from "axios";
import ComponentCard from "./ComponentCard";
import styled from 'styled-components'

const HolderDiv = styled.div `
    margin: 3%;
    margin-bottom:10%;
   

`;

const ButtonDiv = styled.div `
    display:flex;
    margin:5%;
    margin-bottom:5%;
    justify-content: space-around;
    

`;

const DivButton = styled.button `

        transition-duration:0.4s;
        :hover{
            background-color:#cc6600; 
            color: white;
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }


`;



export default function ComponentHolder(){
//setting the API date
const [charData,setCharData] = useState([]);
//making a page changer
const [page,setPage] = useState(1);

function pageIncrement(){
    if(page<9){
        setPage(page+1);
    }
}
function pageEnlessener(){
    if(page>1){
        setPage(page-1);
    }
}


useEffect(()=>{
console.log("api request");
axios
.get(`https://swapi.co/api/people/?page=${page}`)
.then(response =>{
    console.log(response)
    setCharData(response.data.results);
   /* setCharData(response.data);
    console.log(response);
    setName(response.data.name);
    //set name from API
    setBirth(response.data.birth_year);
    //set birth year*/
    
})
.catch(error=>console.log(error));
},[page])
console.log("chardata ", charData);


return (

    <HolderDiv>
     {
         charData.map((item,i)=>{
             return <ComponentCard key = {i}  data = {item}/>
         })
         
        }
        <ButtonDiv>
        <DivButton onClick = {e=> pageEnlessener()}>Previous Page</DivButton>
        <DivButton onClick = {e=> pageIncrement()}>Next Page</DivButton>
        </ButtonDiv>
        
    </HolderDiv>

)



};

