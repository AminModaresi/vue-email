export default {
    register(state , payload){
        localStorage.setItem("token" , payload)
        state.token = payload
    }   
}