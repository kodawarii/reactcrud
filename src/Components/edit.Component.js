import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeimg = this.onChangeimg.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id:'',
      img: '',
      name: '',
      price:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:52624/api/NoneApparels/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                id: response.data.id,
                img: response.data.img, 
                name: response.data.name,
                price: response.data.price });
          })
          .catch(function (error) {
              console.log(error);
          });
    }

  onChangeimg(e) {
    this.setState({
      img: e.target.value
    });
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })  
  }

  onChangeprice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      img: this.state.img,
      name: this.state.name,
      price: this.state.price
    };

    axios.put('http://localhost:52624/api/NoneApparels/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update NoneDesign Items</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Img Link:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.img}
                      onChange={this.onChangeimg}
                      />
                </div>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangename}
                      />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChangeprice}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}