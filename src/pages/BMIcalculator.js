import React, {useState} from 'react'

export default function BMIcalculator() {

    const [userBMI,setUserBMI] = useState('');
    const [userData,setUserData] = useState({
        weightKG : 0,
        heightM : 0,
    })
    const [bmiResult, setBmiResult] = useState('');

    const itemHandle = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value});
        setUserBMI(Number(userData.weightKG/(userData.heightM*userData.heightM)));
    }
    
    const submit =(event) => {
        event.preventDefault();
        console.log(userBMI);
        if(userBMI<18.5){
            setBmiResult('underweight')
        }else if (userBMI<24.9 && userBMI>18.5){
            setBmiResult('normal')
        }else if (userBMI<29.9 && userBMI> 25){
            setBmiResult('Overweight')
        }else if (userBMI<34.9 && userBMI>30){
            setBmiResult('Obese')
        }else if (userBMI>35){
            setBmiResult('extremely obese')
        }
    }

    






    return (
        <div>
            <h1>your BMI is {userBMI}</h1>
            <h1>you are categorized as {bmiResult}</h1>

            <input type='number' name = 'weightKG' onChange ={itemHandle}/>
            <input type='number' name = 'heightM' onChange = {itemHandle} />
            <button type='submit' onClick={submit}> check your BMI</button>
        </div>
    )
}
