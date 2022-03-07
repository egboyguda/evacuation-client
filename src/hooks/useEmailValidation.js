import React,{useState} from "react";
export default ()=>{
    const [msg,setMsg] = useState(null);
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          setMsg("Invalid Email");
         
          return false;
        }
        else {
          
          setMsg(null);
        }
      }
      return [validate,msg];
}