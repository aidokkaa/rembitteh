import { log } from 'console';
import React from 'react';
export const Mikrov=()=>{
    const[name,setName]=React.useState('');
    const[address,setAddress]=React.useState('')
    const[number,setNumber]=React.useState(0)
    const[mark,setMark]=React.useState('')
    const[cause,setACause]=React.useState('');
    function sendWhatsapp(){
        let phonenumber = "+77021880556";
        let url = "https://wa.me/" +phonenumber +"?text="
        +"Имя:"+ " " + name+ " "+"%0a"
        +"Адрес:"+ " "+address+""+"%0a"
        +"Телефонный номер для обратного звонка:"+" "+number+"%0a"
        +"Марка стиральной машины:"+ ""+mark+" "+"%0a"
        +"Причина поломки:"+""+cause+""+"%0a";
        window.open(url,'_blank')
    }
    
    return (
        <>
           <div className="washMash">
             <h1 className='text'>Оставьте заявку на консультацию</h1>   
             <div className='formDiv'>
                 <form className='form' >
                    <div className="inputs">
                    <input onChange={(e:any)=>setName(e.target.value)} className='input' type="text" placeholder='Ваше Имя'/>
                    <input onChange={(e:any)=>setAddress(e.target.value)} className='input' type="text" placeholder='Ваш адрес'/>
                    <input onChange={(e:any)=>setNumber(e.target.value)} className='input' type="number" placeholder='Телефонный номер' />
                    <input onChange={(e:any)=>setMark(e.target.value)} className='input' type="text" placeholder='Марка техники'/>
                    <input onChange={(e:any)=>setACause(e.target.value)} className='input' type="text" placeholder='Причина поломки'/>
                    <div onClick={sendWhatsapp} className='btn1'>Оставить заявку</div>
                     <h3>Мы решим Вашу проблему в течение 15 минут</h3>
                    </div>
                 </form>
             </div>
           </div>
        </>
    )
}