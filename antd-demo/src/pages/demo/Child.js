import  React from 'react';
export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){
        console.log('will mount');
    }
    
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}