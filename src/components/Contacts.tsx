import React from 'react';
import { Link } from 'react-router-dom';
const Contacts=()=>{
    return(
        <>
        <div className="contacts">
       <h1>Контакты</h1>
           <div className="contInner">
            <div className="left">
                <img className='leftImg' src="https://ireland.apollo.olxcdn.com/v1/files/3e41pgsd9gav2-UA/image" alt="" />
            </div>
            <div className="right">
                <p>Номер телефона для заявки</p>
                <h3>87021880556</h3>
                <p>График работы</p>
                <h3>С 8:00 до 22:00
без перерывов и выходных</h3>
<p>Приеду к вам на дом по городу Алматы. Работаем без перерывов и выходных, если хотите узнать подробности, оставьте заявку на сайте или позвоните по номеру.</p>
            </div>
           </div>
           <div className="footer">
            <p className='fText'>Мастер по ремонту бытовой техники</p>
            <a href="">Политика конфиденциальности</a>
           </div>
        </div>

        </>
    )
}
export default Contacts