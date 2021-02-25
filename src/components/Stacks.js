import React, { useState } from 'react';

const Stacks = () => {

    const init_form = {name: '', category: ''}

    const [categories,setCategories] = useState(['Programming','Tool','Framework','Library','Platform'])
    const [stacks,setStacks] = useState([{name: 'Java', category: 'Programming'}])
    const [stack,setStack] = useState(init_form);

    const addStackHandler = (e) => {
        const copy = [...stacks];
        copy.push({...stack});
        setStacks(copy);
        setStack(init_form);
    }

    return <div>
        <h1>Stacks</h1>
            <div className="row">
                <div className="col">
                <select className="form-control" id="categories" value={stack.category}
                    onChange={(e)=> setStack({...stack,category:e.target.value})}>
                    <option value=''>Category</option>
                    {
                        categories.map(c => <option key={c} value={c}>{c}</option>)
                    }
                </select>
                </div>
                <div className="col">
                <input type="text" className="form-control"  value={stack.name  }
                    onChange={(e)=>setStack({...stack,name:e.target.value})} 
                    placeholder="Name"></input>
                </div>
                <div className="col">
                <button className="btn btn-primary" onClick={(e)=>addStackHandler(e)}>Add Stack</button>
                </div>
            </div>
                    
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                    stacks.map(st => <tr key={st.name}>
                        <td>{st.category} </td>
                        <td className="card-title">{st.name}</td>
                        <td><a href="#" className="card-link">Card link</a><a href="#" className="card-link">Another link</a></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    </div>
}
export default Stacks;