import React from "react";
import { GrCompliance } from "react-icons/gr";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";
type Props={
    val:number,
    time:number
}
  const val = 5;
  const time = 150;
  const val1 = 340;
  const time1 = 2;
  const val2 = 50;
  const time2 = 10;
  
const Counter:React.FC=()=>{
    const [ currVal, setCurrVal ] = React.useState(0);
    const [ currVal1, setCurrVal1 ] = React.useState(0);
    const [ currVal2, setCurrVal2 ] = React.useState(0);
  
    React.useEffect(() => {
      currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
    }, [ currVal ]);
    React.useEffect(() => {
        currVal1 !== val1 && setTimeout(setCurrVal1, time1, currVal1 + 1);
      }, [ currVal1 ]);
      React.useEffect(() => {
        currVal2 !== val2 && setTimeout(setCurrVal2, time2, currVal2 + 1);
      }, [ currVal2 ]);
  
    return (
     <>
        <div className="current">
        <div className="counter">
        <GrCompliance style={{color:"white",fontSize:"50px"}} />
            <h1 className='currVal'>{currVal}</h1>
            <span className="p">лет успешной работы</span>
        </div>
        <div className="counter">
        <GiAutoRepair style={{color:"white",fontSize:"50px"}}/>
            <h1 className='currVal'>{currVal1}</h1>
            <span className="p">и более отремонтированной техники</span>
        </div>
        <div className="counter">
        <MdOutlinePriceChange style={{color:"white",fontSize:"50px"}}/>
          <h1 className='currVal'>{currVal2} %</h1>
          <span className="p"> дешевле других сервисов</span>
        </div>
        </div>
     </>
    );
  }
export default Counter