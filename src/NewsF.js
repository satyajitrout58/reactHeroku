import React, {useState, useEffect } from 'react'

const fuserData = [
    {
        name: 'satyajit',
        id: '11'
    },
    {
        name: 'satyajit1',
        id: '112'
    },
    {
        name: 'satyajit2',
        id: '113'
    },
    {
        name: 'satyajit3',
        id: '114'
    }
]
const fetchUserInfo = (hotelId, setUser) =>{
    console.log(hotelId);
    setUser((prevState)=>{
            console.log(prevState);
            return [
                ...prevState,
                ...fuserData
            ]
    })
}
 const Newsf = () => {
     const [state, setNews] = useState({
         news: ['newa1', 'newa2', 'newa3'],
         hotelId: 0
     });
     const [userDat,  setUserData] = useState([]);

     useEffect(()=>{
        if(state.hotelId != 0){
            fetchUserInfo(state.hotelId, setUserData);
        }
     },[state.hotelId])

     const handleDisplay = () => {
        setNews({
            ...state,
            hotelId: state.hotelId + 1
        })
     }
     const handleReset = () => {
         console.log('handle reset');
     }
    return (
        <div>
            <p>NewsF</p>
            <p>
                {
                    JSON.stringify(userDat)
                }
            </p>
            <button onClick={handleDisplay}>Display</button>
            <button onClick={handleReset}>Reset</button>
            {state.hotelId === 0 && <TestCamp />}
            
        </div>
    )
}

const TestCamp = () => {
    useEffect(()=>{
        console.log('mount');
        return () =>{
            console.log('unmount');
        }
    })
    return (
        <div>Test</div>
    )
}


export default Newsf;
