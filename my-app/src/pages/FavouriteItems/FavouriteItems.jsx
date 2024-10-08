import style from './FavouriteItems.module.css'
import { AuthToken } from '../../assets/constants/const'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const FavoriteItems = ()=>{

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem(AuthToken)
      if(!token){
        navigate('authorise')
      }
    
    },[navigate])
    return (
        <div className={style.wrapper}>It`s favourite items page</div>
    )
}