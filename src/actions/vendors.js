import axios from 'axios';

export const vendors  = (data)=>{

 

    return {
       

         type:'VENDOR',
        payload:{
           
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            id: data.id,
            data: data.data
               
            
        }
    }


}






