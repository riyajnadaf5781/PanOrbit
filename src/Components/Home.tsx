import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Details from "./Details";


function Home() {
  const panorbit = "https://panorbit.in/api/users.json";
  const [employeedata, setEmployeeData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [homepage, setHomepage] = useState(true);
  const [selectedUser, setSelectedUser] = useState<any>('');

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data.users);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setShowModal(true);
    setHomepage(false);
  };

  console.log("selectedUser....", selectedUser)

  return (
    <>
      {homepage &&
        <div className="">
          <div className="home-container">
            <div className="container-fluid text-center d-flex justify-content-center">
              <div className="main-content">
                <div className="card shadowa card-radius">
                  <div className="card-title  card-header"><span className="fw-bold title-text">Select an Account</span></div>
                  <div className="card-body home-body-card">
                    <div className="container-fluid">
                      {employeedata?.map((itr: any, i) => (
                        <div className="card zoom-effect border-0 pointer" key={itr?.id} onClick={() => handleUserClick(itr)}>
                          <div className="d-flex mt-2">
                            <div className="ms-2 mb-2">
                              <img src={itr?.profilepicture} alt="Profile" className="profile-picture" />
                            </div>
                            <div>
                              <p className="ms-2 fw-bold mt-2">{itr?.name}</p>
                            </div>
                          </div>
                          <hr></hr>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {selectedUser &&

        <Details user={selectedUser} />
      }
    </>
  )
}

export default Home;
