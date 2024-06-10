import { ChangeEvent, useState } from 'react';

export const useForm = <T>( initState: T ) => {  
    
    const [formData, setFormData] = useState(initState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    /// Agregando funcionalidad para resetear al estado inicial el formulario

    const resetForm = () => {
        setFormData({...initState})
    }

    //! Validaciones a formularios

    /// Validar un gmail, espera un string y si es valido manda true si no false
    const isValidEmail = (email: string) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    return {
        //- properties
        ...formData,
        formData,
        //- Methods
        onChange,
        resetForm,
            /// validaciones
        isValidEmail,
    };
};
