import { useEffect, useState } from "react";
import { getSingleItem } from "../../Api/Products/getSingleItemApi";
import { useParams } from "react-router-dom";
import style from './DetailedItem.module.css'
import { DetailedSingleItem } from "../../components/DetailedSingleItem/DetailedSingleItem";
import { AuthToken, TOKEN } from "../../assets/constants/const";

export const DetailedItem =()=>{
    const params = useParams()
    

    const [item, setItem] =useState([])

    useEffect( () =>{
        // const token = localStorage.getItem(AuthToken)
        const cardId = params.Item
        const fetchData = async () => {
            const res = await getSingleItem(cardId, TOKEN)
            const responce = await res.json()

            setItem(responce)
        }
      fetchData()
      
    },[setItem])
    
    console.log(item)

    return (  <div className={style.wrapper}><DetailedSingleItem key ={item._id} item ={item}/></div>)
}