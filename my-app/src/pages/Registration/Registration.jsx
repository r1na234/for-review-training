import style from './Registration.module.css'
import { object, string } from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { registrateFetch } from '../../Api/User/registrateApi';
import { AuthToken } from '../../assets/constants/const';
import { useEffect } from 'react';

export const Registration =()=>{

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
        group:"",
    }

    const onSubmit = async (values) =>{
        console.log(values)
        const res = await  registrateFetch(values)
        const responce = await res.json()   
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
        group: string('Введите группу')
        .required('Обязательное поле')
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
                <Field id="password" name="password" type="password" placeholder="Введите пароль" className ={style.field}/>
                <ErrorMessage name="password" />
            <label htmlFor="group" className={style.label}>Группа</label>
                <Field id="group" name="group" type="group" placeholder="Введите группу" className ={style.field}/>
                <ErrorMessage name="group" />
             <button type="submit"className ={style.button}>Зарегистрироваться</button>
            </Form>

        </Formik>
        
        <p>Уже зарегистрированы?</p>
        <NavLink to='/authorize' className={style.p}><p>Вернуться на страницу авторизации</p></NavLink>
    </div>
    </>
    )
}