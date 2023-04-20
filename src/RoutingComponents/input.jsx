function Input(){


    const handleChange = (e)=>{
        console.log("DEBOUNCING_EVENT_FIRED",e.target.value)
    }

     const debounce = (fn,delay) => {
            let timer;        
        return function(event){
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    fn(event)
                },delay);
        }
     }
  

    return(<>
            <input type="text" placeholder="Debouncing Example" onChange={debounce(handleChange,1000)}/>
        </>)
}

export default Input;














