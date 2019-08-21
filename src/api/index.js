import ajax from'./ajax'

export const reqHome =()=> ajax('/msite')
export const reqCategory= ()=>ajax('/category')