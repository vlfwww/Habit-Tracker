import { useSelector } from "react-redux";
import Habit from '../Components/HabitPart/index';
import Progress from '../Components/Progress/index'

function MainPage(){
     const base = useSelector(state=>state.HabitSlice);
    return (
        <>
        <Habit/>
        <Progress/>
        </>
    )
}
export default MainPage;