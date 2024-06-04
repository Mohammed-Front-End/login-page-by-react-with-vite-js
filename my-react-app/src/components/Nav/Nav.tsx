import './index.scss'
interface iProps {
  news?:string,
  contact?:string,
  about?:string,
  loginTxt:boolean
  setLoginTxt:(val:boolean)=>void,
}
const NavBar = ({news,contact,about,loginTxt, setLoginTxt}:iProps) =>{

  //! Short cut  
  //** const NavBar:FC<iProps> = ({home,news,contact,about}) =>{
  return (
    <>
      <ul>
        <li>
          <button className="active btn btn-green" onClick={()=>{
            setLoginTxt(!loginTxt)
            }}>
            {loginTxt ? "LogOut":"LogIn"}
          </button>
        </li>

        <li><a href="#news">{news}</a></li>
        <li><a href="#contact">{contact}</a></li>
        <li className="about" ><a href="#about">{about}</a></li>
      </ul>
    </>
  )
}

export default NavBar