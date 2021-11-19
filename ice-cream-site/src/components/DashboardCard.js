import React from 'react'; 
import './DashboardCard.css'


function DashboardCard({title, body, price, imageUrl}) {
    return(
        <div className="card-container"> 
            <div className='image-container'>
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-text'>
                <div className='card-title'>
                    <p>{title}</p>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='card-price'>
                    <p>${price}</p>
                </div>
            </div>
            <div class="add-btn">
                <button>Add to basket</button>
            </div>
            
        </div>
    )
}

export default DashboardCard