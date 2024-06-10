import { useForm } from '../hooks/useForn';
import '../styles/styles.css'

const RegisterPage = () => {

    /// extraer
    const { resetForm ,name, email, password1, password2, formData , onChange, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
    };


    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={(ev) => onSubmit(ev)}>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={` ${name.trim().length <= 0 && 'has-error'} `} //- Clase que definimos para cuando hay erro en el input
                />
                {/*//- Validar campo vació   */}
                {/*//* Se pone la && para no poner el ternario en en los : poner null, es como un ternario que ya tiene el null invisible */}
                {name.trim().length <= 0 && (
                    <span>Este campo es necesario</span>
                )}{' '}
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={` ${!isValidEmail(email) && 'has-error'} `}
                />
                {/* /// Validar email */}
                {!isValidEmail(email) && <span>Este campo es invalido</span>}
                <input
                    type='password'
                    placeholder='Password'
                    name='password1'
                    value={password1}
                    onChange={onChange}
                />
                {password1.trim().length <= 0 && (
                    <span>Este campo es necesario</span>
                )}
                {password1.trim().length < 6 && password1.trim().length > 0 && (
                    <span>
                        La contraseña debe de tener al menos 6 caracteres
                    </span>
                )}
                <input
                    type='password'
                    name='password2'
                    placeholder='Repeat password'
                    value={password2}
                    onChange={onChange}
                />
                {password2.trim().length <= 0 && (
                    <span>Este campo es necesario</span>
                )}
                {password2 !== password1 && (
                    <span>Las contraseñas no coinciden</span>
                )}
                <button type='submit'>Create</button>
                {/*//- Uso de el método  */}
                <button type='button' onClick={resetForm}>
                    {' '}
                    Reset Form
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
