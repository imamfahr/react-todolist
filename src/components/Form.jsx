import React, {useState} from 'react'

export default function Form() {
    const [user, setUser] = useState({
        firstName: '', 
        lastName: '', 
        email: '',
        password:'',
        address:'',
        birthDate: '',
        gender: '',
        skills:'',
    })

    const valueChange=(el)=>{
        setUser({...user,[el.target.name]:el.target.value});
    }

    const handleClick=(el)=>{
        const target = el.target
        const name = target.name
        const value = target.value;
        setUser ({
            ...user,
            [name]:value
        })

    }

    const submit=()=>{
        console.log(user)
    }


    return (
        <div>

    <h1>{user.firstName}</h1>
    <h1>{user.lastName}</h1>
    <h1>{user.email}</h1>
    <h1>{user.password}</h1>
    <h1>{user.address}</h1>
    <h1>{user.birthDate}</h1>
    <h1>{user.gender}</h1>
    <h1>{user.skills}</h1>



        <form>
        <label>Enter your name</label><br/>
        <input type="text" placeholder="First Name" name = 'firstName' onChange = {valueChange} value = {user.firstName}/>
        <input type="text" placeholder="Last Name" name = 'lastName' onChange = {valueChange} value = {user.lastName} />
        <br />
        <input type="email" placeholder="Email" name = 'email' onChange = {valueChange} value = {user.email}/>
        <br />
        <input type="password" placeholder="Password" name = 'password' onChange = {valueChange} value = {user.password}/>
        <br />
        <textarea
          rows="4"
          cols="50"
          name="address"
          form="usrform"
          placeholder="Type Address Here"
          onChange = {valueChange} value = {user.address}
        ></textarea>
        <br />
        <input type="date" name = 'birthDate' placeholder="birthdate" onChange = {valueChange} value = {user.birthDate}/>
        <br />

        <br />
        <br />
        <input type="radio" id="male" name="gender" value='male' onChange={handleClick}  onChange = {valueChange}/>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value='female' onChange={handleClick}  onChange = {valueChange}/>
        <label for="female">Female</label>
        <input type="radio" id="others" name="gender" value='prefer not to say' onChange={handleClick} onChange = {valueChange}/>
        <label for="other">Prefer not to say</label>
        <br />

        <input type="checkbox" id="coding" name="coding" value={user.skills} name = 'skills' onChange = {valueChange}/>
        <label for="coding"> Coding</label>
        <input type="checkbox" id="design" name="design" value={user.skills} name = 'skills'onChange = {valueChange}/>
        <label for="design"> Design</label>
        <input type="checkbox" id="gaming" name="gaming" value={user.skills} name = 'skills'onChange = {valueChange}/>
        <label for="gaming"> Gaming</label>
      </form>
      <button onSubmit={submit}>Submit your data</button>
        </div>
    )
}
