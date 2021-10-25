import { FC } from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

interface formDataType {
    email:string
    password:string
    rememberMe:boolean
}

export function Login() {
    return (
        <div>
        <h1>LOGIN</h1>
        <LoginReduxForm/>
        </div>
    )
}

export const LoginForm:FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={"input"}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<formDataType>({form: 'login'})(LoginForm)