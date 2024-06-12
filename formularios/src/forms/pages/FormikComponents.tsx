import '../styles/styles.css';

/*/// Importaciones necesariasA  */
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as Yup from 'yup';

const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Basic Tutorial </h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    /// nuevos valores
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Dave de tener 15 caracteres o menos')
                        .required('Este campo es requerido'),
                    lastName: Yup.string()
                        .max(10, 'Dave de tener 10 caracteres o menos')
                        .required('Este campo es requerido'),
                    email: Yup.string()
                        .email('El email no tiene un formato valido')
                        .required('Este campo es requerido'),
                    /*/// Validaciones a los nuevos campos   */
                    terms: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'), //- esto es un arreglo con los valores permitidos
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'Esta opción no es permitida')
                                .required('Requerido')
                })}
            >
                {(formik) => (
                    <Form>
                        <label htmlFor='firstName'>First Name</label>

                        <Field name='firstName' type='text' />
                        <ErrorMessage name='firstName' component='span' />

                        <label htmlFor='lastName'>Last Name</label>
                        <Field name='lastName' type='text' />
                        <ErrorMessage name='lastName' component='span' />

                        <label htmlFor='email'>Email Address</label>
                        <Field name='email' type='email' />
                        <ErrorMessage name='email' component='span' />

                        {/*/// de aca para abajo están los nuevos campo que se agregaron   */}
                        <label htmlFor='jobType'>Job Type</label>
                        <Field name='jobType' as='select'>
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-senior'>IT Senior</option>
                            <option value='it-jr'>IT Jr.</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span' />

                        {/* al tocar la etiqueta se activa el check */}
                        <label>
                            <Field name='terms' type='checkbox' />
                            Terms and conditions
                        </label>
                        <ErrorMessage name='terms' component='span' />

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormikComponents;
