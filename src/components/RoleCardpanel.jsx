
import RoleCard from "./RoleCard";
import './styles/rolecard.css'
/* import plusIcon from "../assets/plusIcon.svg" */
import roles from "../Utils/sampledata";
import './styles/adminpanel.css'

const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>




function RoleCardPanel(){


    return(
        <div className="role-card-panel">
            <div className="role-card-panel-header">
                <h2>Roles</h2>
                <button type="button" className="btn">{plusIcon}New Role</button>
            </div>
            
            <div className="role-card-panel-roles">
                
                <div className="role-card-panels-body">
                    {roles.map((role, index) => <RoleCard key={index} name = {role.name.toUpperCase()} count = {role.count} authority = {role.authority} />)}
                </div> 
            </div>
        </div>   
    )
}

export default RoleCardPanel
