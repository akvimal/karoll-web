import React, { useState } from 'react';

const Modules = () => {

    const init_form = {title: '', role: '', proficiency: ''}

    const [proficiencies,setProficiencies] = useState(['Beginner','Intermediate','Advanced'])
    const [roles,setRoles] = useState(['Developer','Programmer'])
    const [modules,setModules] = useState([])
    const [module,setModule] = useState(init_form);

    const addModuleHandler = (e) => {
        const copy = [...modules];
        copy.push({...module});
        setModules(copy);
        setModule(init_form);
    }

    return <div>
        <h1>Modules</h1>
            <div className="row">
            <div className="col">
                <input type="text" className="form-control"  value={module.title  }
                    onChange={(e)=>setModule({...module,title:e.target.value})} 
                    placeholder="Title"></input>
                </div>
                </div>
                <div className='row'>
                <div className="col">
                <select className="form-control" id="roles" value={module.role}
                    onChange={(e)=> setModule({...module,role:e.target.value})}>
                    <option value=''>Job Role</option>
                    {
                        roles.map(c => <option key={c} value={c}>{c}</option>)
                    }
                </select>
                </div>
                <div className="col">
                <select className="form-control" id="roles" value={module.proficiency}
                    onChange={(e)=> setModule({...module,proficiency:e.target.value})}>
                    <option value=''>Proficiency</option>
                    {
                        proficiencies.map(c => <option key={c} value={c}>{c}</option>)
                    }
                </select>
                </div>
              
                
                <div className="col">
                <button className="btn btn-primary" onClick={(e)=>addModuleHandler(e)}>Add Module</button>
                </div>
            </div>
                    
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Role</th>
                    <th scope="col">Proficiency</th>
                    <th scope="col">Title</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    modules.map(st => <tr key={st.title}>
                        <td>{st.role} </td>
                        <td>{st.proficiency} </td>
                        <td>{st.title}</td>
                        <td><a href="#" className="card-link">X</a>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    </div>
}
export default Modules;