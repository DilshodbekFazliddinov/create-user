// import style
import "./newUser.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function NewUser({ addUser }) {
  const [user, setUser] = useState({
    image: "",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: "",
    gender: "",
  });

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ ...user, id: uuidv4() });
  };
  return (
    <div>
      <div className="modal-wrapper">
        <div className="overlay">
          <div className="modal">
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Image Url:</span>
                <input
                  type="url"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, image: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <span>First Name</span>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, firstName: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <span>Last Name</span>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, lastName: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <span>Age</span>
                <input
                  type="number"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, age: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <span>From</span>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, from: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <span>Job</span>
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, job: e.target.value };
                    });
                  }}
                />
              </label>
              <div className="gender">
                <span>Gender</span>
                <label>
                  <small>male</small>
                  <input
                    type="radio"
                    onChange={(e) => {
                      setUser((prev) => {
                        return { ...prev, gender: e.target.value };
                      });
                    }}
                    name="gender"
                    value="male"
                    required
                  />
                </label>
                <label>
                  <small>female</small>
                  <input
                    type="radio"
                    onChange={(e) => {
                      setUser((prev) => {
                        return { ...prev, gender: e.target.value };
                      });
                    }}
                    name="gender"
                    value="female"
                    required
                  />
                </label>
              </div>
              <button className="modal-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
