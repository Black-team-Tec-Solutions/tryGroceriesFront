import React, {Component} from 'react';
import './styles.css';
import image from '../../assets/image/corazon-saludable-producto.png';
import NumberInput from '../../components/NumberInpunt';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';
import {createDietEndpoint} from '../../services/diet-ws';
import {updateUserEndpoint} from '../../services/user-ws';

export default class Auth extends Component{
    state={
        diet:{
            days: 0,
            mealNum: 0,
        },
        user:{
            stage: 2
        }
    }
    handleChange = (e) => {
        let {diet} = this.state
        const {name, value} = e.target
        diet[name] = value
        this.setState({ diet })
        console.log(diet)
    }

    handleSubmit = (e) => {
        const {match,history} = this.props
        const {diet, user} = this.state
        e.preventDefault()

        updateUserEndpoint(user)
        .then(
            res => { 
                localStorage.setItem( "user",JSON.stringify(res.data.result) )
        })
        .catch(error => (error)) 

        createDietEndpoint(diet)
        .then(
            res => { 
                localStorage.setItem( "user",JSON.stringify(res.data.result) )
                this.props.history.push('/onboarding/secondStep')
        })
        .catch(error => (error)) 
    }

    render(){
        const {diet} = this.state
        const {handleChange,handleSubmit} = this
        const {match,} = this.props


        return(
            <div className="container d-flex align-items-center flex-column cont-test">
                <form onSubmit={handleSubmit}>               
                    <img className="masthead-avatar mb-5" src={image} height="300px" width="300px" alt="..." />
                    <div className="sect1">
                    <p className="masthead-heading text-uppercase mb-0">¿Cuantos dias realizaras tu dieta?<NumberInput name="days" min="0" max="7" handleChange={handleChange}/></p>
                    </div>
                    <p className="masthead-heading text-uppercase mb-0">¿Cuantas comidas al dia vas a consumir?<NumberInput name="mealNum" min="0" max="9" handleChange={handleChange}/></p>
                    
                    <Button text='Siguiente'/>
                </form>
            </div> 
        )
    }
}