import React, { Component } from 'react';
import { FiX } from "react-icons/fi";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
           {/* <ClearIcon />  */}
        <FiX style={{
        cursor: "pointer", 
        float: "right",
        fontSize: "25px",
        marginBottom: "10px", }} 
        onClick={() => this.props.onShowItem(this.props.item)}/>
        <img src={this.props.item.img}  />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-cart' 
        onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  };
};

export default ShowFullItem;
