import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function AllUsers(){

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/admin/user`).then((res)=>{
            setUsers(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const [searchterm,setSearchTerm] = useState("");

    function Delete(id) {

        axios.delete(`/api/users/delete/${id}`).then((res) => {

            alert(" Delete SuccessFully")

        }).catch(err => { alert(err) });

    }

    return(
        <div>
            <h1>All Users</h1>  
            <input type="text" name="Search" placeholder="Search" onChange={(e)=>{
                setSearchTerm(e.target.value);
            }}/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Pic</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        users.filter(val =>{
                            if(val === ""){
                                return val;
                            }
                            else if(
                                val.name.toLowerCase().includes(searchterm.toLocaleLowerCase())||
                                val.name.toLowerCase().includes(searchterm.toLocaleLowerCase())
                            ){
                                return val;
                            }
                        })
                        
                        
                        .map((val,key)=>{
                            
                            return(
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.address}</td>
                                    <td>{val.gender}</td>
                                    <td><img src={val.pic} width="200px"/></td>
                                    <div >

                                     

                                     <a href="/admin/users" className="btn btn-danger" onClick={() => Delete(val._id)} >

                                          Delete
                                    </a>



                               </div>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}