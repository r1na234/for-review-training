import style from './PersonalCard.module.css'


export const PersonalCard = ({personalInfo})=>{
    return(
        <>
        <p>{personalInfo.name}</p>
        <img src={personalInfo.avatar} className={style.avatar}/>
        <p>{personalInfo.about}</p>        
        <p>{personalInfo.email}</p>
        <p>{personalInfo.group}</p>
        </>
    )
} 