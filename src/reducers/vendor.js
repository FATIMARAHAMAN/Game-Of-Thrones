const initialState = {
    
    first_name:"",
    last_name:"",
    email:"",
    id:"",
    data:[]
         
 
     
};


const vendorReducer = (state=initialState, action)=>{
  // console.log("action:");
  // console.log(action);
  // alert(action.payload.id);
  switch(action.type){
      
       
        case "VENDOR":  
        const { data, first_name, last_name, email, id } = action.payload;

        return {
       
          first_name,
        last_name,
        email,
        id,
        data
           
              
        }
       
          
          default: return state;
  }

}
export  default vendorReducer;