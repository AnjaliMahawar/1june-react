import { Component } from "react";


export class App2 extends Component{

    //property


    //constructor

    //method

    render(){
        console.log(this.props.name1.name)
        console.log(this.props.name1.add)

        return <h1> hello {this.props.name1.name}</h1>
    }
}