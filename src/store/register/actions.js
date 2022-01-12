export default {
    async singup(context , payload){
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCx1Nc0ouKSZh5WSY9-BSjfetiyayMERW8" , {
            method : "POST",
            body : JSON.stringify(payload)
        })
        const responseData = await response.json()
        if(!response.ok){
            const error = responseData.error.message
            throw new Error(error)
        }
        context.commit("register" , responseData.idToken)
    },
    async login(context , payload){
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx1Nc0ouKSZh5WSY9-BSjfetiyayMERW8" , {
            method : "POST",
            body : JSON.stringify(payload)
        })
        const responseData = await response.json()
        if(!response.ok){
            const error = responseData.error.message
            throw new Error(error)
        }
            context.commit("register" , responseData.idToken)
        },
        getToken(context , payload){
            context.commit("register" , payload)
        },
        logout(context , payload)  {
            context.commit("register" , payload)
        }
        
}