import React, {Component} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import NumberInput from '../../components/NumberInpunt';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {patchDietEndpoint} from '../../services/diet-ws';
import {updateUserEndpoint} from '../../services/user-ws';

export default class Auth extends Component{
    state={
        diet:{
            meals: [{meal:'', quantity: 0}],
        },
        user:{
            stage: 3
        }
    }
    handleChange = (e) => {
        let {diet} = this.state
        const {name, value} = e.target
        diet["meals"][name] = value
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

        patchDietEndpoint(diet)
        .then(
            res => { 
                localStorage.setItem( "user",JSON.stringify(res.data.result) )
                
        })
        .catch(error => (error)) 
    }

    render(){
        const {diet} = this.state
        const {handleChange,handleSubmit} = this
        const {match,} = this.props
        let meals = [0,1,2,3,4]
        return(
      
            <ul className="list-group list-meal" style={{maxHeight: "90vh", overflow: "scroll"}}>
            {
                meals.map((meal, index_c) => (
                    <li>
                        <form onSubmit={handleSubmit}>
                            <TextInput
                            name="meal"
                            textLabel={`comida ${index_c}`}
                            placeholder={`comida ${index_c}`}
                            handleChange={handleChange}
                            />
                            <NumberInput name="quantity" min="0" handleChange={handleChange}/>
                            <Button text='Submit'/>
                        </form>
                    </li>
                ))
            }       
            </ul>
            
        )
    }
}