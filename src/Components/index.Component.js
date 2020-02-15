import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {products: []};
    }

    componentDidMount(){
      axios.get('http://localhost:52624/api/NoneApparels')
        .then(response => {
          this.setState({ products: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    tabRow(){
      return this.state.products.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Business List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Img Link</th>
                <th>Name of Piece</th>
                <th>Price</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }