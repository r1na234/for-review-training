import style from './Authorization.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { authorizeFetch } from '../../Api/User/authorizeApi';
import { AuthToken } from '../../assets/constants/const';
import { useEffect } from 'react';



export const Authorization = ()=> {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem(AuthToken)
        if(token){
          navigate('/')
        }
    }, [navigate])
    
    const initialValues={
        email: "",
        password: "",
    }

    const onSubmit = async (values) =>{
        console.log(values)
        const res = await  authorizeFetch(values)
        const responce = await res.json()   

        console.log(responce)
        localStorage.setItem(AuthToken, responce.token)
        
        return navigate('/')
    }

    const authorizationSchema = object({
        email: string('Введите Ваш email')
        .email('Введите почту')
        .required('Обязательное поле'),
        password: string('Введите пароль')
        .min(8,'Минимальное количество символов - 8')
        .max(16, 'Максимальное количество символов - 16')
        .required('Обязательное поле'),
      });

    return(
    <>
    <div className={style.wrapper}>
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={authorizationSchema}
        >
            <Form className={style.form}>
            <label htmlFor="email" className={style.label}>Email</label>
                <Field
                id="email"
                name="email"
                placeholder="smth@email.com"
                type="email"
                className ={style.field}
                />
                <ErrorMessage name="email" />
             <label htmlFor="password" className={style.label}>Пароль</label>
                <Field id="password" name="password" type="password" placeholder="Введите пароль" 
                className ={style.field}/>
                <ErrorMessage name="password" />
             <button type="submit" className ={style.button}>Войти</button>
            </Form>

        </Formik>
    
        <p>Еще не зарегестрированы?</p>
        <NavLink to='registration' className={style.p}><p>Зарегистрироваться</p></NavLink>
        
    </div>
    </>
    )
}