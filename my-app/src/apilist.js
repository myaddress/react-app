import React from 'react';
import Property from './property';

function Applist(state){
    state={
        AppDetails:{
            "EmplDetails":{
                "Columns":"EmployeeID"
            },
            "EmplLeave":{
                "Columns":"Employee Leave"
            },
            "EmplEntlmn":{
                "Columns":"Entitlement"
            }
        }
    }
    return(
        <div>
            <div className="dropdown-item">
                Employee Details: <Property app={state.AppDetails.EmplDetails}/>
            </div>
            <div className="dropdown-item">
                Employee Leave: <Property app={state.AppDetails.EmplLeave}/>
            </div>
            <div className="dropdown-item">
                Employee Entitlements:<Property app={state.AppDetails.EmplEntlmn}/>
            </div>
        </div>
    );
}

export default Applist