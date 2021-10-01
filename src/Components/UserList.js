import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const UserList = ({ users }) => {
  return (
    <div>
         <div className="user">
      {users.map((user) => (
      
            <Card  className='carte' style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>
              {user.name}
              {user.username}{" "}
            </Card.Title>
          </Card.Body>
         
          <ListGroup className="list-group-flush">
          <ListGroupItem><u>Email:</u>{user.email}</ListGroupItem>
          <ListGroupItem>
            Address:
            <Card.Text>
              {user.address.street},{user.address.suite},,{user.address.city},
              {user.address.zipcode},{user.address.geo.lat}
              {user.address.geo.lng}
            </Card.Text>
          </ListGroupItem>
          <ListGroupItem><u>Phone:</u>{user.phone} </ListGroupItem>
         
  <ListGroupItem><u>Website:</u>{user.website} </ListGroupItem>
             <ListGroupItem><u>Company:</u>
                 <Card.Text>
             {user.company.name},{user.company.catchPhrase},{user.company.bs}
             </Card.Text>
                  </ListGroupItem>
           </ListGroup>
          
         </Card>
       
       ))}
       </div>
       ;
     </div>
   );
 };
 
 export default UserList;