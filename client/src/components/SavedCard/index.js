import React from 'react';


function SavedCard (props) {
    return (
        <div className = 'card' key = {props.id}>
            <div className ='card-header'>
                <div className = "row">
                    <div className = 'col s6'>
                        <h4 className = 'card-title'>{props.title}</h4>
                    </div>
                </div>
            </div>
            <div className = 'card-body'>
                <div className = "row">
                    <div className = 'col s8'>
                        <p className = "category">{props.description}</p>
                    </div>
                    <div className="col s4">
                <img src={props.image} 
                className="img-fluid" alt="Responsive"/>
              </div>
                </div>
                <table className='responsive-table highlight'>
                    <thead>
                        <tr>
                            <th>Website</th>
                            <th>Price</th>
                            <th>Shipping</th>
                            <th>Condition</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {props.platform}
                            </td>
                            <td>${props.price}</td>
                            <td>${props.shipping}</td>
                            <td>{props.condition}</td>
                            <td><button data-id = {props.id} onClick = {props.deleteBTN}>Remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default SavedCard