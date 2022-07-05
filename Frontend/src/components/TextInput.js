import {useField} from 'formik'

import '../styles/textInput.css'

const TextInput = ({label, ...props}) =>{
    const [field, meta] = useField(props);

    return (
        <div className="control">
            <label className="control-label">{label}</label>
            <br/>
            <input className='input' {...field} {...props}/>
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
        </div>
    )

}

export default TextInput;