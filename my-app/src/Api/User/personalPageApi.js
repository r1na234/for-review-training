export const getPersonalInfo = (token)=>{
    return fetch('https://api.react-learning.ru/v2/group-11/users/me', {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
}