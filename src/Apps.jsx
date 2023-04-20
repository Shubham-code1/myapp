import React from 'react'
import Clock from './components/Clock'

class App extends React.Component{

  state = {
    show:true,
    date: new Date()
  }

details = [{
    userName: "Shuhbam",
    pass:"shubham@123"
  },
{
  userName:"Saurabh",
  pass:"saurabh@123"
},
{
userName:"Abhishek",
pass:"Abhishek@123"
}]

getDataFromChild(data){
  console.log(data);
}

data = {name:"shubham",
        age:25,
        class:"B Tech"}

componentDidMount(){
  setTimeout(()=>{
    this.setState({show:false})
    alert("Server Says: Component will unmount !")
  },5000)
}

  render(){
    return(<>
  
   {this.state.show === true ? <Clock/>:<h1>Clock get Unmounted !!!</h1>}
    
    </>)
  }
}

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    