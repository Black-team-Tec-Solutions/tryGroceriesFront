import React, {Component} from  'react'
import "./workout.css"
import image from '../../assets/image/corazon.png'


class Workout extends Component {

    state={
        user:{}

    }
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user)
        this.setState({user}) //actualiza estado
    }
        render(){
                return (
                    <div></div>
                )
            /* if(this.state.user.role==="USER"){
                return <UserWorkout/>
            }else{
                return(
                  <AdminWorkout/>
                    )
            } */
            
            
        }}
    
   

           

   



export default Workout;