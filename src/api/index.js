import ajax from'./ajax'

const BASE= '/api'
export const reqHome =()=> ajax('/msite')
export const reqCategory= ()=>ajax('/category')




//login/:id   /login/1
// export const reqkeywords =( keyWord)=> ajax(BASE+'xhr/search/searchAutoComplete.json?keywordPrefix='+keyWord)


//发送搜索商品关键词请求
export const reqkeywords =( keywordPrefix)=> ajax.get(BASE+'xhr/search/searchAutoComplete.json',{
    params:{
        keywordPrefix
    }
}) 


//发送初始热门搜索请求
export const reqkeywordsInit=()=>ajax.get(BASE+'xhr/search/init.json')



// export const reqkeywords =( keyWord)=> ajax({
//     // method:'GET',
//     url:BASE+'xhr/search/searchAutoComplete.json',
//     params:{
//         keywordPrefix:keyWord
//     }
// }) 