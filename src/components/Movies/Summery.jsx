import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Summery = ({watchTime}) => {
    const [time,setTime] = useState(watchTime);
    const [breakTimes,setBreakTimes] = useState(0);

    const totalBreakTime = time - breakTimes;
    useEffect(()=>{
        const getWatchTimeFromStorage = localStorage.getItem("watch-time");
        setTime(getWatchTimeFromStorage);
        const getBreakTime = localStorage.getItem('break-time');
        if(getBreakTime === null){
            setBreakTimes(0);
        }else{
            setBreakTimes(getBreakTime);
        }
    },[watchTime]);

    const handleBreakTime = (breakTime) =>{
       localStorage.setItem('break-time',breakTime);
       setBreakTimes(breakTime);
    }

    const notify = () => toast("Wow Work Done!");
    

    return (
        <div className="col-sm-12 col-md-6 text-center sticky-top sticky-bottom">
            <div className="card d-flex">
                <h1>Summary</h1>
                <p>TotalWatch Time: {totalBreakTime}</p>
                <h1>Take Break Time</h1>
               <div className="mx-auto my-3">
                <Button onClick={()=>handleBreakTime(15)} variant="success">15</Button>
                <Button onClick={()=>handleBreakTime(20)} variant="primary" className=" mx-2">20</Button>
                <Button onClick={()=>handleBreakTime(25)} variant="danger">25</Button>
               </div>
               <p>{breakTimes}</p>
                <Button onClick={notify} variant="success">Completed</Button>
            </div>
                <ToastContainer/>
        </div>

    );
};

export default Summery;