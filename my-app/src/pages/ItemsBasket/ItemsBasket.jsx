import { useEffect } from 'react'
import style from './ItemsBasket.module.css'
import { AuthToken } from '../../assets/constants/const'
import { useNavigate } from 'react-router-dom'

export const ItemsBasket = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem(AuthToken)
      if(!token){
        navigate('authorize')
      }
      else{
    
      }
    },[navigate])
    return (
        <div className={style.wrapper}>it`s basket of items page</div>
    )
}