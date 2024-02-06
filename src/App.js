import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBTable,
  MDBTableHead,
  MDBTableBody
}
  from 'mdb-react-ui-kit';
import axios from 'axios'; // Import axios for making HTTP requests


function App() {
  const [registerModel, setRegisterModel] = useState({
    name: null,
    email: null,
    password: null,
    phno: null
  });

  const [displayData, setDisplayData] = useState([])
  const handleRegister = async () => {
    alert("iam calling here");
    try {
      const response = await axios.post('http://127.0.0.1:5000/user/', registerModel).then(() => {
        console.log(response.data);
        setRegisterModel({
          name: '',
          email: '',
          password: '',
          phno: ''
        });
        getUsers();
      })

    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  useEffect(() => {
    getUsers()

  }, [])
  const getUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/users/')

      console.log(response.data);
      setDisplayData(response.data)
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput
                  label='Your Name'
                  value={registerModel.name}
                  onChange={(e) => setRegisterModel({ ...registerModel, name: e.target.value })}
                  id='form1'
                  type='text'
                  className='w-100'
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput
                  label='Your Email'
                  value={registerModel.email}
                  onChange={(e) => setRegisterModel({ ...registerModel, email: e.target.value })}
                  id='form2'
                  type='email'
                />

              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput
                  label='Your Password'
                  value={registerModel.password}
                  onChange={(e) => setRegisterModel({ ...registerModel, password: e.target.value })}
                  id='form3'
                  type='password'
                />

              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg' />

                <MDBInput
                  label='Your MobNo'
                  value={registerModel.phno}
                  onChange={(e) => setRegisterModel({ ...registerModel, phno: e.target.value })}
                  id='form4'
                  type='text'
                />

              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={handleRegister}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <MDBTable striped bordered>
        <MDBTableHead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {console.log(displayData, "111111111")}
          {displayData?.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phno}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      {/* {displayData ? displayData : "NO data"} */}


    </MDBContainer>
  );
}

export default App;