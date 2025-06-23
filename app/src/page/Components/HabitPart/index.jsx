import style from '../HabitPart/index.module.css';
import img1 from '../../image/img1.png'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addNewHabit, changeCheckbox} from '../../../slice/HabitSlice';
function Habit(){
    const base = useSelector(state=>state.HabitSlice);
    const [value,setValue] = useState('');
    const dispatch = useDispatch()
    return (
        <>
            <div className={style.block}>
                <div className={style.title}>
                    <img src={img1}/>
                    <h1>Habit Tracker</h1>
                </div>
                <div className={style.add}>
                    <input type="text" onChange={(e)=>setValue(e.target.value)}/>
                    <button onClick={()=>dispatch(addNewHabit(value))}>Добавить привычку</button>
                 </div>
            <div>
                {
                    base.map((el,i)=>
                        <div key ={i}>
                            <h2>{el.title}</h2>
                            <div>{el.days.map((element,ind)=><input key={ind} onChange={()=>dispatch(changeCheckbox({status:element.status, day: element.day, id:el.id}))} type='checkbox' checked={element.status}></input>)}</div>
                        </div>
                    )
                }
            </div>
            </div>
        </>
    )
}
export default Habit;