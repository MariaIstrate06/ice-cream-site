import React from 'react'; 
import DashboardRow from './DashboardRow';
 
function Dashboard(){
    return(
        <div className="dashboard"> 
            <DashboardRow/>
            <DashboardRow/>
            <DashboardRow/>
            <DashboardRow/>
        </div>
    )
}

export default Dashboard