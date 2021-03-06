import React, {Component} from 'react';
import './styles.css'
import logo from '../../assets/image/logo.png'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button'
import {Link} from 'react-router-dom'
import {signupEndpoint, loginEndpoint} from '../../services/auth-ws'


export default class Auth extends Component{
    state={
        user:{
            name: '',
            email:'',
            password:'',
            confirmPassword:''

        }
    }
    handleChange = (e) => {
        let {user} = this.state
        const {name, value} = e.target
         user[name] = value
         this.setState({ user })
         console.log(user)
    }

    handleSubmit = (e) => {
        const {match,history} = this.props
        const {user} = this.state
        e.preventDefault()
        match.path === "/signup" ? signupEndpoint(user)
        .then(
            res => {
                
                localStorage.setItem( "user",JSON.stringify(res.data.result) )
            this.props.history.push('/onboarding')
        })
    .catch(error => (error)): loginEndpoint(user)
    .then(
        res => {
            
            localStorage.setItem( "user",JSON.stringify(res.data.result) )
            console.log(res.data)
            switch (res.data.result.stage){
                case 0:
                    this.props.history.push('/onboarding');
                break;
                case 1:
                    this.props.history.push('/onboarding/firstStep');
                break;
                case 2:
                    this.props.history.push('/onboarding/secondStep');
                break;
                case 3:
                    this.props.history.push('/main');
                break;
            }
    })
        .catch(error => (error)) 
    }

    render(){
        const {user} = this.state
        const {handleChange,handleSubmit} = this
        const {match,} = this.props


        return(
            <section className="auth-container">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <img src={logo} width='20%'/>

                        {match.path === "/signup" && 
                        
                        <TextInput
                            name="name"
                            textLabel='Nombre'
                            placeholder='Juan Perez'
                            handleChange={handleChange}
                        />}

                        <TextInput
                        name="email"
                        textLabel='Correo Electornico'
                        placeholder='luis@gmail.com'
                        handleChange={handleChange}
                        
                        />
                       

                        <TextInput
                            name="password"
                            textLabel='Contrasena'
                            type='password'
                            placeholder='.........'
                            handleChange={handleChange}
                        />

                    {match.path === "/signup" && 
                        
                        <TextInput
                            name="confirmPassword"
                            textLabel='Confirma la contrasena'
                            type='password'
                            placeholder='.........'
                            handleChange={handleChange}
                        />}
                        <Button
                        text='Registrate'
                        />
                        
                        
                        
                    </form>
                    <span> {`${
                        match.path !== '/signup' ? "Aun no" : 'Ya'
                    } tienes cuenta? |`}
                        <Link to={match.path !== "/signup" ? "/signup" :"/login" }>Dale aqui</Link>
                    </span>
                </div>
            </section>
        )
    }
}