export const getSingleItem = (cardId, token)=>{
      return fetch(`https://api.react-learning.ru/products/${cardId}`
            , {
                headers: {
                    Authorization: 'Bearer ' + token
                }              }
            )
              }