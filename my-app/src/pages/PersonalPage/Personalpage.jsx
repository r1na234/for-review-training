import style from './PersonalPage.module.css'
import { useState, useEffect } from 'react'
import { PersonalCard } from '../../components/PersonalCard/PersonalCard'
import { AuthToken } from '../../assets/constants/const'
import { useNavigate } from 'react-router-dom'
import { getPersonalInfo } from '../../Api/User/personalPageApi'

export const PersonalPage = ()=>{

  const navigate = useNavigate()

 
    const [personalInfo, setPersonalInfo] = useState([])

    useEffect(() => {
     const token = localStorage.getItem(AuthToken)
    if(!token){
      navigate('/authorize')
    }
    else{
      const fetchData = async ()=>{
        const res = await getPersonalInfo(token)
        const responce  = await res.json()
        setPersonalInfo(responce)
      }
      fetchData()
    }
    }, [navigate])
    
    console.log(personalInfo)

 return(<div className={style.wrapper}>
    <PersonalCard personalInfo={personalInfo}/>
    
</div>)}