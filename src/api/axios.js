import axios from "axios"

const instance =axios.create({
    baseURL:"http://api.themoviedb.org/3",
    params:{
        api_key:"a5023cf07926e1633b6a8e896408b74d",
        language:"ko-KR"
    }
})

export default instance;