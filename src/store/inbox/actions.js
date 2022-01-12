export default {
    async getComments(context){
        const response = await fetch("https://jsonplaceholder.ir/comments")
        const responseData = await response.json();
        const comments = responseData
        context.commit("getComments" , comments)
    }
}