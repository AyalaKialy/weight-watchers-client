export default function Reducer(state:any , action:any){
    switch (action.type) {
        case "ADD":
            return action.payload
        default:
        return state;

}}