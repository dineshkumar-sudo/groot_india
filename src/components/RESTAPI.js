import React, { Component } from 'react';
import { Card, Icon, Image,Button,Table,Header,Rating } from 'semantic-ui-react'
import './api.css';
 
class RestAPI extends Component {
    state = {
        student: [],
        popup: 0,
        view: 0
      }
      componentDidMount() {
        fetch("https://usersgrootan.free.beeceptor.com/userstu")
        .then(res => res.json())
        .then((data) => {
          this.setState({ student: data })
          console.log(this.state.student)
        })
        .catch(console.log)
      }

    renderfullprofile (s){

        let arr=this.state.student;
        for (let i = 0; i < arr.length; i++){
            if(arr[i].id==s)
            {
                console.log("got it..!");
                this.setState({ view:arr[i] , popup :1 } , console.log("got it..! updated.."));
            }
        }
 
      }
      closepopup()
      {
        this.setState({ popup: 0 });
      }


  render() {

    console.log(this.state.popup);
    if(this.state.popup==1)

    {
        
        let cprofile = this.state.view;
        console.log("popup",this.state.view);
        return(
            <>

              <Table celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell singleLine>Name </Table.HeaderCell>
                    <Table.HeaderCell>Firstname</Table.HeaderCell>
                    <Table.HeaderCell>Lastname</Table.HeaderCell>
                    <Table.HeaderCell>Date of birth</Table.HeaderCell>
                    <Table.HeaderCell>Age</Table.HeaderCell>
                    <Table.HeaderCell>email</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h2' singleLine textAlign='center'>
                        {cprofile.name}
                        </Header>
                      </Table.Cell>
                      <Table.Cell singleLine>{cprofile.firstName}</Table.Cell>
                      <Table.Cell>
                        {cprofile.lastName}
                      </Table.Cell>
                      <Table.Cell textAlign='right'>
                        {cprofile.dob}
                        
                      </Table.Cell>
                      <Table.Cell>
                       {cprofile.age}
                      </Table.Cell>
                      <Table.Cell>
                       {cprofile.email}
                      </Table.Cell>
                    </Table.Row>
                </Table.Body>
              </Table>
                

              
                
                {/* <h1>Name : {cprofile.name}</h1><br></br>
                <h1>First Name : {cprofile.firstName}</h1><br></br><br></br><br></br>
                <h1>Last Name : {cprofile.lastName}</h1><br></br>
                <h1>Date of birth : {cprofile.dob}</h1><br></br>
                <h1>Age : {cprofile.age}</h1><br></br>
                <h1>Address : {cprofile.address}</h1><br></br>
                <h1>City : {cprofile.city}</h1><br></br>
                <h1>Email: {cprofile.email}</h1><br></br> */}


                <br></br>
                <div className="btnlist"></div>
                <button className="btn" onClick={()=>{this.renderfullprofile( (parseInt(cprofile.id)-1))  }}>prev</button>
                <button className="btn" onClick={()=>this.closepopup() }>close</button>
                <button className="btn" onClick={()=>{this.renderfullprofile( (parseInt(cprofile.id)+1))  }}>next</button>
                
                 
            </>
        )



    }

    else
    {

    return (
        <>
         {this.state.student.map((student) => (
           
            

          <Card>
           <Image src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' wrapped ui={false} />
           <Card.Content>
             <Card.Header>{student.name}</Card.Header>
             <Card.Meta>{student.city}</Card.Meta>
             <Card.Description>
               {student.name} is a good performer <br></br>
               For Contacts : {student.email}
             </Card.Description>
           </Card.Content>
           <Card.Content extra>
             <a onClick={()=>{this.renderfullprofile(student.id)}}>
               <Icon name='user' />
               Click for full profile
             </a>
           </Card.Content>
         </Card>
            
         ))}
         
        </>
     );

         }
  }
}
export default RestAPI;