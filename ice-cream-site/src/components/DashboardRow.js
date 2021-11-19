import React from 'react'; 
import DashboardCard from './DashboardCard';
import './DashboardRow.css';
import pic1 from '../resources/Mask Group 1-1.png'
import pic2 from '../resources/Mask Group 1-2.png'
import pic3 from '../resources/Mask Group 1-3.png'
import pic4 from '../resources/Mask Group 1-4.png'
import arrow from '../resources/Group 1340.png'


function DashboardRow(){
    return(
        <div>
            <div class='headings'> 
                <div className='row-title'>
                    <p>TOP SELLING ICE CREAM</p>
                </div>
                <div className='row-explore'>
                    <p>EXPLORE MORE</p>
                    <div className="arrow">
                        <img src={arrow} alt=''/>
                    </div>
                </div>
            </div>
            <div className="dashboard-row"> 
                <DashboardCard
                title='Title1'
                imageUrl={pic1}
                body='Lorem ipsum simdolor something somethings on the floor'
                price='2.50'/>
                <DashboardCard
                title='Title2'
                imageUrl={pic2}
                body='Lorem ipsum simdolor something somethings on the floor'
                price='2.50'/>
                <DashboardCard
                title='Title3'
                imageUrl={pic3}
                body='Lorem ipsum simdolor something somethings on the floor'
                price='2.50'/>
                <DashboardCard
                title='Title4'
                imageUrl={pic4}
                body='Lorem ipsum simdolor something somethings on the floor'
                price='2.50'/>
            </div>
        </div>
    );
}

export default DashboardRow