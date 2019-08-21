import axios from 'axios'

// axios.interceptors.request.use((config)=>{
//     const {methods,data}=config
//     if(methods.toLowerCase()==='post'&&data &&typeof data===Object){
//         config.data=data
//     }
//     return config
// })

// axios.interceptors.response.use(response=>{
//     return response.data
// })

export default axios