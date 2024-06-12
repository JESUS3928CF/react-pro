import '../styles/styles.css';

import { useFormik } from 'formik';

// Importación necesaria, importamos todo de yup y le ponemos Yup
import * as Yup from 'yup'

const FormikYupPage = () => {
    
    const {
        handleSubmit,
        errors,
        touched,
        getFieldProps, /// getFieldProps, Esto es para que estables el name, el onblur, el value y la verdad ahorra demasiado trabajo
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Dave de tener 15 caracteres o menos')
                .required('Este campo es requerido'),
            lastName: Yup.string()
                .max(10, 'Dave de tener 10 caracteres o menos')
                .required('Este campo es requerido'),
            email: Yup.string()
                .email('El email no tiene un formato valido')
                .required('Este campo es requerido'),
        }),
    });

    return (
        <div>
            <h1>Formik Basic Tutorial </h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>

                <input
                    type='text'
                    {...getFieldProps('firstName')}
                    /*//- Esto ya lo hace el getFieldProps, solo necesitamos el tipo */
                    /* name='firstName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName} */
                />

                {touched.firstName && errors.firstName && (
                    <span> {errors.firstName} </span>
                )}

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' {...getFieldProps('lastName')} />

                {touched.lastName && errors.lastName && (
                    <span> {errors.lastName} </span>
                )}

                <label htmlFor='email'>Email Address</label>
                <input type='email' {...getFieldProps('email')} />

                {touched.email && errors.email && <span> {errors.email} </span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default FormikYupPage;
