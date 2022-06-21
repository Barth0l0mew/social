export const FOLLOWS = 'FOLLOWS'
export const SETDATA = 'SETADATA'
export const onFollows = (id)=>{
  return {
    type:FOLLOWS,
    payLoad:id
  }
}
export const onSetData = (body)=>{
  return{
    type:SETDATA,
    payLoad:body
  }
}
