import './header.css'
import{Link} from 'react-router-dom'
const Header =()=>{
    //dynamic data
    let appName="React App"
    let fontstyle={
        fontFamily : "Courier New"
    }
    return(
        <div className='heading' style={fontstyle} >
        <h1>Welcome to  { appName }...</h1>
       <hr/>
       <Link to="/">Home</Link>|
       <Link to="/counter">Counter</Link>|
       <Link to="/contacts">Contacts</Link>|
       <Link to="/users">Users</Link>|
       <Link to="/context">Context</Link>|
       <Link to="/redux">Redux</Link>|
       <Link to="/form">Form</Link>|
       <Link to="/big">BigComonenet</Link>|
        <hr/>
    </div>
    );
}

export default Header;