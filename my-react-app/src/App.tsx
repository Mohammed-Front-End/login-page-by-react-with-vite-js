import './App.css'
import { IUserData } from './Interfaces/DataRigister';
import LogingForm from './components/Form/LogingForm';
import UserDetails from './components/Form/UserDetails';
import HeadingTitle from './components/Heading/Heading';
import NavBar from './components/Nav/Nav';
import { useState } from 'react';


function App() {
  // const [count, setCount] = useState(0)
  const $news = "my news";
  const $contact = "contact";
  const $about = "about me";
  const [isLoggedin,setLoginTxt] = useState(false);
  const [userData,setUserData] = useState<IUserData>({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
  });
  return (
    <>
  <NavBar news={$news} contact={$contact} about={$about} loginTxt={isLoggedin} setLoginTxt={setLoginTxt}/>

    {isLoggedin ? <HeadingTitle title={'Medo ❤ '}> <UserDetails user={userData}/> </HeadingTitle>  : <LogingForm setLoginTxt={setLoginTxt}
    userData={userData}
    setUserData={setUserData}
    />}
    
    </>
  )
}

export default App
