import { useState } from "react";

import "./App.css";
// components import
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import NewUser from "./components/newUser/newUser";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };

  // close Modal
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  // addUser
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLenght={users.length} />
      <main>
        {!users.length && <div className="no-users">No Users</div>}

        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUser addUser={addUser} />}
      <button
        className="create-user"
        onClick={() => {
          setShowModal(true);
        }}
      >
        create user
      </button>
      <Footer />
    </div>
  );
}

export default App;
