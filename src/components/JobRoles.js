import React, { useState } from 'react';

const JobRoles = () => {

    const init_form = {name: ''}

    //const [categories,setCategories] = useState(['Programming','Tool','Framework','Library','Platform'])
    const [roles,setRoles] = useState([])
    const [role,setRole] = useState(init_form);

    const addRoleHandler = (e) => {
        const copy = [...roles];
        copy.push({...role});
        setRoles(copy);
        setRole(init_form);
    }

    return <div>
        <h1>Job Roles</h1>
            <div className="row">
                
                <div className="col">
                <input type="text" className="form-control"  value={role.name  }
                    onChange={(e)=>setRole({...role,name:e.target.value})} 
                    placeholder="Name"></input>
                </div>
                <div className="col">
                <button className="btn btn-primary" onClick={(e)=>addRoleHandler(e)}>Add Role</button>
                </div>
            </div>
                    
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    roles.map(jr => <tr key={jr.name}>
                        <td className="card-title">{jr.name}</td>
                        <td><a href="#" className="card-link">X</a></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    </div>
}
export default JobRoles;