import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:8080'

const UNPROTECTED_PATHS = [     //path พวกนี้ไม่ต้องใช้ header
    'loginUser',
    'registerUser'
]

const isUnprotectedPath =(url)=>{    //function 
    for(let path of UNPROTECTED_PATHS){
        if (url.includes(path)){
            return true
        }
        return false
    }
}

Axios.interceptors.request.use(
    async config =>{
        if(isUnprotectedPath(config.url)){    //เป็นpath ที่ต้องการ headerมั้ย
            return config
        }
        let token =  localStorage.getItem("ACCESS_TOKEN")   
        config.headers['Authorization'] = `Bearer ${token}`   // ของจริงที่แนบ authorization - token  จะเป็นการแนบheader key=  authorization มีค่า bearer token แทน
        return config
    },
    async error =>{
        throw error
    }
)

export default Axios;