import React from 'react';

class Customer extends React.Component{
    render(){   //항상 수행되는 내용
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.gob}</p>
            </div>

        )
    }
}

export default Customer;