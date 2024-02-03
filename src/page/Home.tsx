import React from 'react'
import MainAbout from '../components/MainAbout';
import {FlickityOne} from '../components/FlickityOne'
import Counter from '../components/About';
import Header from '../components/Header';
import { GiWashingMachine } from "react-icons/gi";
import { BsScooter } from "react-icons/bs";
import { GiChickenOven } from "react-icons/gi";
import Contacts from '../components/Contacts';

const items=[
  {value:'Ремонт стиральных машин',href:'/wash',icon:<GiWashingMachine />},
  {value:'Ремонт самокатов',href:'/samokat',icon:<BsScooter/>},
  {value:'Ремонт микроволновок',href:'/mikro',icon:<GiChickenOven/>},
  {value:'Ремонт мелкой бытовой техники',href:'/melkiibit',icon:<GiChickenOven/>}
];
export const Home = () => {
      const [active,setActive]=React.useState<boolean>(false);
     
  return (
    <div>
      <Header items={ items} active = {active} setActive={ setActive}></Header>
       <MainAbout></MainAbout> 
       <Counter></Counter>
       <FlickityOne></FlickityOne>
       <Contacts/>
    </div>
  )
}
