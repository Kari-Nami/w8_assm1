import {useEffect, useRef, useState} from "react";

const hobbies = [
  {
    value: "music",
    name: "Music",
  },
  {
    value: "movie",
    name: "Movies",
  },
  {
    value: "plastic-model",
    name: "Plastic Model",
  },
];

const genders = [
  {
    value: "male",
    name: "Male",
  },
  {
    value: "female",
    name: "Female",
  },
  {
    value: "others",
    name: "Others",
  },
];

function UserRegistration() {
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userHobbies, setUserHobbies] = useState([])

  function handleReset() {
    setUserName('')
    setFirstName('')
    setLastName('')
    setUserGender('')
    setUserHobbies([])
  }

  function handleSubmit() {

  }

  return (
    <div className={"form"}>
      <div>User Registration</div>
      <hr />
      <div>
        <div className={"form-row"}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={userName} onChange={(event) => setUserName(event.target.value)}/>
        </div>
        <div className={"form-row"}>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" name="firstname" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
        </div>
        <div className={"form-row"}>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" name="lastname" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
        </div>
        <div className={"form-row"}>
          <label htmlFor="gender-1">Gender</label>
          <div className={"choices"}>
            {genders.map((gender) => {
              return (
                <div key={gender.value} className={"choice"}>
                  <input type="radio" name="gender" id={gender.value} checked={userGender === gender.value} onChange={() => setUserGender(gender.value)}/>
                  <label htmlFor={gender.value}>{gender.name}</label>
                </div>
              )
            })}
          </div>
        </div>
        <div className={"form-row"}>
          <label htmlFor="hobby-1">Hobbies</label>
          <div className={"choices"}>
            {hobbies.map((hobby) => {
              return (
                <div key={hobby.value} className={"choice"}>
                  <input type="checkbox" name="hobby" id={hobby.value} checked={userHobbies.includes(hobby.value)} onChange={(event) => {
                      if (event.target.checked) { setUserHobbies([...userHobbies, hobby.value]) }
                      else { setUserHobbies(userHobbies.filter(chosenHobby => chosenHobby !== hobby.value)) }
                    }}/>
                  <label htmlFor={hobby.value}>{hobby.name}</label>
                </div>
              )
            })}
          </div>
        </div>
        <div className={"form-row"}>
          <label htmlFor="role">Role</label>
          <select id="role" name="role">
            <option value="general-staff">General Staff</option>
            <option value="developer">Developer</option>
            <option value="system-analsyt">System Analyst</option>
          </select>
        </div>
      </div>
      <hr />
      <div className={"form-submission"}>
        <button className={"reset-button"} onClick={() => handleReset()}>Reset</button>
        <button className={"submit-button"} onClick={() => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
}

export default UserRegistration;
