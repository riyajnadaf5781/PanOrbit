import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnyTxtRecord } from "dns";
import 'bootstrap/dist/js/bootstrap.min.js';
import { BsArrowRight } from 'react-icons/bs';
import Maplocation from "./Maplocation";

function Details(props: any) {
  const { user } = props;
  const [activeSection, setActiveSection] = useState('profile');
  const [employeedata, setEmployeeData] = useState([]);

  const handleNavClick = (section: any) => {
    setActiveSection(section);
  };

  React.useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data.users);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  function openChatWindow(profile: any) {
    // Create a new chat window element
    const chatWindow = document.createElement("div");
    chatWindow.className = "chat-window";

    // Create chat header
    const chatHeader = document.createElement("div");
    chatHeader.className = "chat-header";

    // Create profile picture
    const profilePicture = document.createElement("img");
    profilePicture.src = profile.profilepicture;
    profilePicture.alt = "Profile";
    profilePicture.className = "profile-photo";

    // Create name element
    const nameElement = document.createElement("p");
    nameElement.className = "profile-name";
    nameElement.textContent = profile.name;

    // Append profile picture and name to the chat header
    chatHeader.appendChild(profilePicture);
    chatHeader.appendChild(nameElement);

    // Create closing icon
    const closingIcon = document.createElement("span");
    closingIcon.className = "closing-icon";
    closingIcon.innerHTML = "&#x2715;";
    closingIcon.addEventListener("click", () => closeChatWindow(chatWindow));

    // Append closing icon to the chat header
    chatHeader.appendChild(closingIcon);

    // Create chat message container
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container";

    // Create chat input field
    const chatInput = document.createElement("input");
    chatInput.type = "text";
    chatInput.placeholder = "Type a message...";
    chatInput.className = "chat-input";

    // Create send icon element
    const sendIcon = document.createElement("span");
    sendIcon.className = "send-icon";
    sendIcon.innerHTML = `<BsArrowRight />`;

    chatWindow.appendChild(chatHeader);
    chatWindow.appendChild(messageContainer);
    chatWindow.appendChild(chatInput);
    chatWindow.appendChild(sendIcon);

    // chat window to the container
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer) {
      chatContainer.appendChild(chatWindow);
    }
  }

  function closeChatWindow(chatWindow: any) {
    chatWindow.remove();
  }



  const renderContent = () => {
    switch (activeSection) {
      case 'posts':
        return <div className="container"><div className="rest-mid-content"><div className="fs-1 fw-semibold text-black-50">Coming soon</div></div></div>;
      case 'gallery':
        return <div className="container"><div className="rest-mid-content"><div className="fs-1 fw-semibold text-black-50">Coming soon</div></div></div>;
      case 'todo':
        return <div className="container"><div className="rest-mid-content"><div className="fs-1 fw-semibold text-black-50">Coming soon</div></div></div>;
      default:
        return (
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-5 col-md-12 center">
                <div className="center-detail">
                  <img src={user?.profilepicture} alt="Profile" className="profile-pictures ms-5" />
                  <p className="fw-bold ms-5 ps-4">{user?.name}</p>
                  <p className="ms-4">Username &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.username}</span></p>
                  <p className="ms-5 ps-2">Email &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.email}</span></p>
                  <p className="ms-4 ps-4">Phone &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.phone}</span></p>
                  <p className="ms-3 ps-4">Website &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.website}</span></p>
                  <hr className="hr-divider" />
                  <div>
                    <p className="ms-5 ps-4">Company</p>
                    <p className="ms-4 ps-4">Name &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.company?.name}</span></p>
                    <p className="ms-1">Catchphrase &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.company?.catchPhrase}</span></p>
                    <p className="ms-5 ps-4">bs &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.company?.bs}</span></p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">

                <p>Address:</p>
                <p className="ms-4 ps-3">Street &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.address?.street}</span></p>
                <p className="ms-5">Suit &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.address?.suite}</span></p>
                <p className="ms-5">City &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.address?.city}</span></p>
                <p className="ms-3 ps-1">Zipcode &nbsp;:&nbsp;<span className="fw-bold">&nbsp;{user?.address?.zipcode}</span></p>
                <div>
                <Maplocation latitude={user?.address?.geo?.lat} longitude={user?.address?.geo?.lng} />
                </div>
              </div>
            </div>

          </div>
        );
    }
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // mobile veiw toogel button
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('d-none');
      });
    }
  });
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="row">
          <div className="col-md-3">
            <div>
              <div className="card-height">
                <div className="card-body d-flex flex-column justify-content-between">
                  <nav>
                    <ul className="nav flex-column side-nav-adjust">
                      <li
                        className={`nav-item ${activeSection === 'profile' ? 'active text-white fs-2 pointer' : 'text-white fs-4 pointer'}`}
                        onClick={() => handleNavClick('profile')}
                      >
                        Profile
                      </li>
                      <hr className="text-white" />
                      <li
                        className={`nav-item ${activeSection === 'posts' ? 'active text-white fs-2 pointer' : 'text-white fs-4 pointer'}`}
                        onClick={() => handleNavClick('posts')}
                      >
                        Posts
                      </li>
                      <hr className="text-white" />
                      <li
                        className={`nav-item ${activeSection === 'gallery' ? 'active text-white fs-2 pointer' : 'text-white fs-4 pointer'}`}
                        onClick={() => handleNavClick('gallery')}
                      >
                        Gallery
                      </li>
                      <hr className="text-white" />
                      <li
                        className={`nav-item ${activeSection === 'todo' ? 'active text-white fs-2 pointer' : 'text-white fs-4 pointer'}`}
                        onClick={() => handleNavClick('todo')}
                      >
                        ToDo
                      </li>
                      <hr className="text-white" />
                    </ul>

                  </nav>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-9">
            <div className="d-flex justify-content-between">
              <div><p className="mt-4 fw-bold fs-3 ms-2">Profile</p></div>
              <div className="d-flex mt-4">
                <div className="dropdown">
                  <div data-bs-toggle="dropdown" aria-expanded="false">
                    <img
                      src={user?.profilepicture}
                      alt="Profile"
                      className="profile-picture"
                    />
                  </div>
                  <ul className="dropdown-menu border-none">
                    <div className="dropdown-content">
                      <div className="ms-3">
                        <img
                          src={user?.profilepicture}
                          alt="Profile"
                          className="profile-pic ms-4" />
                      </div>
                      <p className="ms-4 mb-0 dropdown-content-size ps-2">{user?.name}</p>
                      <p className=" text-black-50 ms-2 dropdown-content-size">{user?.email}</p>
                      <hr />
                      {employeedata.slice(0, 2).map((profile: any, i: any) => {
                        return (
                          <><div className="d-flex">
                            <img
                              src={profile?.profilepicture}
                              alt="Profile"
                              className="profile-pic-dropdown ms-4" />
                            <p className="ms-1 mb-0 other-profile">{profile?.name}</p>

                          </div><hr /></>

                        )
                      })}
                      <button className="signout-button ms-5 mb-2">
                        <a href="/Home" className="decoration">
                          <span className="text-white dropdown-content-size fw-bold">Sign Out</span>
                        </a>
                      </button>
                    </div>

                  </ul>
                </div>
                <p className="mt-1 me-4 ms-2 fs-5" onClick={toggleDropdown}>
                  {user?.name}
                </p>
              </div>
            </div>
            <hr />
            <div>{renderContent()}</div>
            <div id="chatContainer"></div>
            <div className="dropup-center dropup">
              <div className="chats-button" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <div className="mt-1 pt-1 ms-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                      </svg>
                    </div>
                    <div>
                      <p className="ms-2 mt-1 pt-1">Chats</p>
                    </div>
                  </div>
                  <div className="mt-1 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                  </div>
                </div>
              </div>

              <ul className="dropdown-menu">
                <div className="scrollable-names">
                  {employeedata?.map((itr: any, i) => (
                    <div className="border-0 pointer" key={itr?.id} onClick={() => openChatWindow(itr)}>
                      <div className="d-flex mt-2">
                        <div className="ms-2 mb-2" >
                          <img src={itr?.profilepicture} alt="Profile" className="profile-photo" />
                        </div>
                        <div>
                          <p className="ms-2 fw-bold mt-2 other-profile">{itr?.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

