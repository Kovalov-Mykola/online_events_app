import { useState } from 'react';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const LoginForm = () => {
    const [formData, setFormData] = useState({email: "", password: ""});
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false)

    const handleInputChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    
    }

    const handleInputFocus = (evt) => {
        if(evt.target.name === "email"){
            setEmailError(false)
        }
        if(evt.target.name === "password"){
            setPasswordError(false)
        }
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        if(!formData.email){
            setEmailError(true);
        }
        if(!formData.password){
            setPasswordError(true)
        }
        if(!formData.email || !formData.password) return

        // Comment

        setFormData({email: "", password: ""})

    }
    return (
        <form onSubmit={handleFormSubmit} className={styles.login_form}>
            <div className={styles.inputs_wrapper}>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>
                        Email
                    </label>
                    <input onFocus={handleInputFocus} onChange={handleInputChange} type="text" className={styles.input} placeholder='Enter your email' name='email' id='email' value={formData.email} />
                    {emailError && <p className={styles.validation_error}>Enter your email, please</p>}
                </div>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>
                        Password
                    </label>
                    <input onFocus={handleInputFocus} onChange={handleInputChange} type="text" className={styles.input} placeholder='Enter your password' name='password' id='password' value={formData.password}/>
                    {passwordError && <p className={styles.validation_error}>Enter your password, please</p>}
                </div>
                <Link to="/" className={styles.recovery_link}>Forgot your password?</Link>
                <div className={styles.registr_link_wrapper}>
                <span>Still don't have an account?</span>
                <Link className={styles.reistr_link} to="/registration">Click here</Link>
                </div>
            </div>
            <Button type='submit' styles={{padding: "16px 32px", color: "white", border: "none", fontSize: "24px", borderRadius:"8px", cursor: "pointer"}}>Log in</Button>
        </form>
    )
}

export default LoginForm;