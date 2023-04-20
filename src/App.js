import Header from "./RoutingComponents/Header";
import Content from "./RoutingComponents/Content";
import SideBar from "./RoutingComponents/SideBar";
import Footer from "./RoutingComponents/Footer";
import Main from "./RoutingComponents/Main";
import {Routes,Route} from 'react-router';
import {NavLink,Link,useNavigate} from 'react-router-dom';
import Input from "./RoutingComponents/input";

function App(){

    const navigate = useNavigate();
  
    return (<>
        <h3>App Component</h3>

        <Input/>

        {/* <Routes>
            <Route path="/" element={<Main/>}/>
          
            <Route path="Footer" element={<Footer/>}/>
            <Route path="header" element={<Header/>}/>
            <Route path="Content" element={<Content/>}/>
            <Route path="SideBar" element={<SideBar/>}/>
        </Routes> */}

      <div className="row">
      <NavLink to="Content">Content</NavLink><br/>
        <NavLink to="SideBar">SideBar</NavLink> <br/>
        <NavLink to="Header">Header</NavLink>  <br/>
        <NavLink to="Footer">Footer</NavLink>  <br/><br/><br/>
    </div>

        <button onClick={()=>{navigate("Content")}}>Switch to Content Page</button>
        <button onClick={()=>{navigate("SideBar")}}>Switch to SideBar Page</button> 
     
{/* 
        <a href="Content">Content</a> <br/>
        <a href="SideBar">SideBar</a> <br/>
        <a href="Header">Header</a>  <br/>
        <a href="Footer">Footer</a>  <br/>  */}

        {/* <Routes>
            <Route path="/" element={<Main/>}>
            <Route path="Footer" element={<Footer/>}/>
            <Route path=":headerid" element={<Header/>}/>
            </Route>
            <Route path="Content" element={<Content/>}>
            <Route path="SideBar" element={<SideBar/>}/>
            </Route>
        </Routes> */}

        <Routes>
            <Route>
                <Route path="" element={<Main/>}>
                <Route index element={<Header/>}/>
                    <Route path="Header" element={<Header/>}/>
                    <Route path="Content" element={<Content/>}/>
                    <Route path="SideBar" element={<SideBar/>}/>
                    <Route path="Footer" element={<Footer/>}/>
                </Route>
            </Route>
        </Routes>
    </>)
}

export default App;