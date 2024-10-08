import style from './DetailedSingleItem.module.css'

const getPrice = (price, discount) => {
    return Math.round((price*100)/(100-discount));
 }

export const DetailedSingleItem = ({item}) =>{

    
    return(
        <div className={style.card}>
            <div className={style.additionalElementsWrapper}>
            
                <p className={`${item.discount? `${style.discounttag}` :"" }`}>{item.discount>0 && -item.discount}{item.discount>0 && "%"}</p>
                <label>
                    <input type='checkbox' className={style.favorite}/>
                    <span className={style.fakecheckbox}/>
                </label>
 
            </div>
            <div className={style.imgWrapper}>
                <img src={item.pictures} className={style.picture} alt={item.name}/>
            </div>
            {item.discount > 0 && (<p className={style.previousprice}>{getPrice(item.price, item.discount)} ₽</p>)}
            <p className={`${item.discount? `${style.disforprice}` :`${style.price}` }`}>{item.price} ₽</p> 
            <p className={style.weight}>{item.wight}</p>
            <p className={style.name}>{item.name}</p>
            <button className={style.button}>В корзину</button>
        </div>
    )
}