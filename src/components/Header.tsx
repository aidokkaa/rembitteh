import React, { SetStateAction } from 'react';
import { GrTechnology } from "react-icons/gr";
import { MdOutlineExpandMore } from "react-icons/md";
import { ItemTypes } from '../moduls';
import { Link } from 'react-router-dom';

interface Props {
  active:boolean,
  setActive:React.Dispatch<SetStateAction<boolean>>,
  items:ItemTypes[]
}
const Header =(props:Props)=>{
  const {active,setActive,items}=props;
  const [stay,setStay] = React.useState('')
  const expandMenu=(e:any)=>{
   e.preventDefault();
    setActive(!active)
  }
   const handleClick = ()=>{
     setStay('Ваша заявка принята!')
   }
  return(
    <>
     <div className="header-container">
       <div className="header-wrapper">
       <div className="header">
        <div className="logo">
        <span className='whiteLogo'><GrTechnology />
        </span>
        <span className='title'>Smart technology</span>
        </div>
          <div className="menu" >
            <a onClick={expandMenu} href="">Категорий <span className='expand'><MdOutlineExpandMore></MdOutlineExpandMore></span></a>
            <Link to="/otzyv">Отзывы</Link> 
            <Link to="/contacts">Контакты</Link> 
          </div>
        </div>
        <div className={active ? "active" : "myMenu"}>
            <div className="ul">
            <ul>
                {
                  items.map((item)=>
                  <li className='li'><span className='icon'>{item.icon}</span><Link className='str' to={item.href}>{item.value}</Link><hr /></li>)
                }
              </ul>
            </div>
            </div>
       <div className="main">
       <div onClick={()=>setActive(false)} className='main-title'>
          <h3 className='zaiavka'>С ГАРАНТИЕЙ НА 12 МЕСЯЦЕВ</h3>
          <h1 className='guarant'>Быстрый ремонт бытовой техники</h1>
          <h3 className='zaiavka'>Оставьте заявку прямо сейчас и получите вызов мастера и диагностику вашей техники бесплатно</h3>
        </div>
        <div onClick={()=>setActive(false)} className='main-right'>
          <form className='formInp' action="">
            <input placeholder='Ваш имя ' className='inps' type="text" />
            <input placeholder='Телефонный номер' className='inps' type ="number" />
            <div onClick = {handleClick} className="btn">
          Оставить заявку
        </div>
        <p style={{color:"white"}}>{stay}</p>
          </form>
        </div>
       </div>

        
       </div>
     </div>
    </>
  )
}
export default Header