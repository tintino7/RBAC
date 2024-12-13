import { useState } from "react";
import avatar from '../assets/avatar.jpg';
import './styles/rolecard.css'

function RoleCard({name, count, authority}){

    const windowWidth = window.innerWidth

    const avatars = []
    for(let i=0; i < (count > 4 ? 4 : count); i++){
        const translate = {
            transform : `translate(${i*10}px)`,
        }
          
        avatars.push( 
            <div key={i} style={translate}>
                <img 
                src={avatar}  
                className="rounded-circle img-fluid" 
                alt="Profile Picture" 
                width="25"/>
            </div> )

        if (i == 3 && count > 4 ){
        avatars.push(<div 
            className="rounded-div" 
            key={-1} 
            style={{transform :`translate(${(i + 1)*10}px)` }}>
            {`+${count - 4}`}
        </div>)

        }
    }

    const authorityStyle = {
        background : `linear-gradient(to right, rgb(9, 136, 255) 
        ${((authority *1.5) / 15) *100}%, 
        #ffff ${(((authority *1.5) / 15) *100) - 100}%)`
    }
        
    return(
        <div className="role-card">
            {windowWidth > 800 ? 
                <div className="role-card-intro">
                    <h2>{name}</h2>
                    <div>
                        <h4>{`${count} Accounts`}</h4>
                        <div className='role-card-intro-images'>
                        {avatars} 
                        </div>
                    </div>
                    <div className="authority" style={authorityStyle}>
                       
                    </div>
                    <button type="button" className="btn btn-primary">Manage Permissions</button>
                </div> 
                : 
                <div className="role-card-intro">
                    <h2>{name}</h2>
                    <button type="button" className="btn btn-primary">Permissions</button>
                </div>}
               
        </div>
    )
}

export default RoleCard
