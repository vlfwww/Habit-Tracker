import style from '../HabitPart/index.module.css';
import img1 from '../../image/img1.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addNewHabit, changeCheckbox} from '../../../slice/HabitSlice';
function Habit(){
    const base = useSelector(state=>state.HabitSlice);
    const [progress,setProgress] = useState([]);
    const arr=[];
    useEffect(()=>{
        for(let i=0;i<base.length;i++){
            const rez = base[i].days.reduce((sum,el)=>el.status?sum+=1:sum+=0,0);
            arr.push({title:base[i].title,length:rez})
        }
        setProgress(arr)
    },[base])
    const dispatch = useDispatch();
    return (
        <>
            <div className={style.block}>
                <div className={style.title}>
                    <img src={img1}/>
                    <h1>Progress</h1>
                </div>
            <div>
                {
                    progress.map((el)=>
                        <div className={style.progress}><p>{el.title}</p><p>{el.length}</p></div>
                    )
                }
            </div>
            </div>
        </>
    )
}
export default Habit;