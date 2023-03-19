// import React, {useState, useEffect} from 'react';
// import {Table} from 'react-bootstrap';
// import axios from 'axios'


// function Mytable(){

//     const [data, setData] = useState([]);

//     useEffect(()=>{
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then(result=>setData(result.data))
//     },[])

//     return(
//         <div>
//         <Table striped bordered hover >
//             <thead>
//                 <tr>
//                     <th>S.NO</th>
//                     <th>NAME</th>
//                     <th>EMAIL</th>
//                     <th>PHONE NO</th>
//                     <th>USERNAME</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     data.map((res, i)=>(
//                         <tr key={i} >
//                             <td>{i+1}</td>
//                             <td>{res.name}</td>
//                             <td>{res.email}</td>
//                             <td>{res.phone}</td>
//                             <td>{res.username}</td>
//                         </tr>
//                     ))
//                 }
//             </tbody>
//         </Table>
//         </div>
//     )
// }

// export default Mytable()