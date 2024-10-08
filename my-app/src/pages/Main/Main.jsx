import style from './Main.module.css'
import { CardItem } from '../../components/CardItem/CardItem'
import { TOKEN } from '../../assets/constants/const'
import { getAllProducts } from '../../Api/Products/getAllProductsApi'
import { useNavigate } from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'

export const Main = () =>{

  const navigate = useNavigate();

  // useEffect(()=>{
  //   const token = localStorage.getItem(AuthToken)
  //   if(!token){
  //     navigate('/')
  //   }
  // },[navigate])

    // const [item, setItem] = useState([])

  //   useEffect(() => {
  //     const fetchData = async ()=>{
  //       const token = localStorage.getItem(AuthToken)
  //       const res = await getAllProducts(token)
  //       const responce  = await res.json()
  //       setItem(responce)
  //     }
  //     fetchData()
  //   }, [setItem])
  
    const  {data:item, isLoading} = useQuery({
      queryKey:['getAllProducts'],
      queryFn: async ()=>{
        const res = await getAllProducts(TOKEN)
        
        const responce  = await res.json()
        
        return responce
      }
    
    })
   
    console.log({item}, {isLoading})
   if(!isLoading){  
    return (
      <>
      <div className={style.container}>        
        <div className={style.main}>
            {item.products?.map((item)=>{
                return (<CardItem key ={item._id} item ={item}/>)
            })}
        </div>
      </div>
      </>
    )}
  
    //TODO обработка ошибок

}











