import React, {Component} from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import SubMenu from '../../components/SubMenu';
import NavBar from '../../components/NavBar';

export default class Auth extends Component{

    render(){

        return(
            <div>
                <NavBar/>
                <div className="row-app">
                    <SubMenu/>
                    <Routes/>
                </div>
            </div> 
        )
    }
}