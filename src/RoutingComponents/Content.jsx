import {Component} from 'react'
import { Outlet } from 'react-router';

class Content extends Component{
    render(){
        return(<>
        <h3>This is Content Page</h3>
        <Outlet/>
        </>)
    }
}

export default Content;