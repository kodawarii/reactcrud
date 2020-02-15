import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props);

        this.state = {
            img: '',
            name: '',
            price: ''
        }

        this.onChangeimg = this.onChangeimg.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeimg(e){
        this.setState({
            img: e.target.value
        });
    }

    onChangename(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeprice(e){
        this.setState({
            price: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log('> Submitting...');
        console.log(`> Check values: link: ${this.state.img}, name: ${this.state.name}, price: ${this.state.price}.`);
        
        const obj = {
            img: this.state.img,
            name: this.state.name,
            price: this.state.price
        };

        axios.post('http://localhost:52624/api/NoneApparels', obj)
            .then(res => console.log(res.data));

        this.setState({
            img: '',
            name: '',
            price: ''
        });
    }
    
    // see https://reactjs.org/docs/forms.html

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Image Link</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.img}
                        onChange={this.onChangeimg}/>
                    </div>
                    <div className="form-group">
                        <label>Item Name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangename}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.price}
                        onChange={this.onChangeprice}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send to SQL server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}