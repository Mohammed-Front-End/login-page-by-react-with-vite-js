import { ChangeEvent, useState } from "react";
import { IFormInput, IUserData } from "../../Interfaces/DataRigister";
import { formInput as initialFormInput } from "../../data";




interface iForms {
  setLoginTxt:(val:boolean)=>void,
  userData:IUserData,
  setUserData:(user:IUserData)=>void
}

function LogingForm({setLoginTxt,userData,setUserData}:iForms) {
const [formInput, setFormInput] = useState<IFormInput[]>(initialFormInput);

  //! Handelers
  function onChangeHandelers (e:ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const {value,name} = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleRemove(id: string) {
    const newInputs = formInput.filter(input => input.id !== id);
    setFormInput(newInputs);
  }
  //! Renders align-items: center;
    // justify-content: space-around;
  const rendersFromInputList = formInput.map((e) => (
    <div key={e.id} style={{display:'flex',alignItems: "center",justifyContent: "space-around"}}>
      <div>
        <label htmlFor={e.id}>{e.label} </label>
        <input 
        type={e.type} 
        name={e.name} 
        id={e.id} 
        value={userData[e.name]} // as keyof IUserData
        onChange={onChangeHandelers}
        />
      </div>
      <button onClick={(ev)=>{
        ev.preventDefault();
        handleRemove(e.id);
      }}>❌
      </button>
    </div>
  ))

  return (
    <section>
      <h3 style={{margin:20,padding:7}}>Your Email: {userData.userEmail}</h3>
      <form onSubmit={(e)=> {e.preventDefault()}}>
        {rendersFromInputList}
        <br></br>
        <button onClick={()=> setLoginTxt(true)}>Login</button>
      </form>
    </section>

  )
}

export default LogingForm
