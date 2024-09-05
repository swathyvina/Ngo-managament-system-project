import {useState} from "react"
export default function Multi(){
    // const [scooter,setScooter]=useState({
    //     color:"red",
    //     brand:"ford",
    //     price:747464
    // });
    // function update(){
    //     setScooter((previousState)=>{
    //         return({...previousState,color:"blue"})

    //     })
            
        
    // }

    // return(
    // <>
    // <p>color:{scooter.color}</p>
    // <p>brand:{scooter.brand}</p>
    // <p>price:{scooter.price}</p>
    // <button onClick={update}>color</button>
    // </> )
    const [list,setList]=useState([])
    const[count,setCount]=useState(1)

    function add() {
        const item="item"+count
        setList(previousState =>{
            return [...previousState,item]
        })
        setCount(previousState =>{
            return (previousState+1)
        })

        
        
        }
        

   return<>
        <h1>list</h1>
        
        <button onClick={add}>add item</button>
        <ul>
            <li>{list.map((e)=><li>{e}</li>)}</li>
        </ul>
        
        </>
    
   










}