import {Component} from 'react'

class Employee extends Component{
        constructor(){
            super();
            this.state = {date:new Date()}
        }

        interval = null;

        componentDidMount(){
           this.interval =  setInterval(()=>{
                console.log("Called from interval")
                this.setState({date:new Date()})
            },1000)
        }

        componentDidUpdate(prevProps,prevState){
                console.log(prevProps);
                console.log(prevState);
        }

        componentWillUnmount(){
            clearInterval(this.interval);
            console.log("component got unmount")
        }

        shouldComponentUpdate(){
            return true;
        }
        
render(){
    return(<>
            {this.state.date.toLocaleTimeString()}
    </>)
}
}

export default Employee;











































