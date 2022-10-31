import React from 'react';
import TopNav from "./TopNav"
import Analytics from './Analytics';
import Company from './Company';
import User from './User';
import Data from "./data.json";

const Display=()=>{
    return(
        <div>
            <TopNav/>
            <div style={{backgroundColor:"rgb(249,249,249)"}}>
                <Analytics/>
                {Data && <Company data={Data.Companies} />}
                {Data && <User data={Data.User}/>}
            </div>
        </div>
    )
}

export default Display;