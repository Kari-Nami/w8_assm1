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

const departments = [
  {
    value: "-",
    name: "-",
    positions: []
  },
  {
    value: "general-staff",
    name: "General Staff",
    positions: [
      {
        value: "cleaner",
        name: "Cleaner",
      },
      {
        value: "receptionist",
        name: "Receptionist",
      },
      {
        value: "security-guard",
        name: "Security Guard",
      }
    ]
  },
  {
    value: "accounting",
    name: "Accounting",
    positions: [
      {
        value: "accountant",
        name: "Accountant",
      },
      {
        value: "senior-accountant",
        name: "Senior Accountant",
      },
      {
        value: "payroll-officer",
        name: "Payroll Officer",
      }
    ]
  },
  {
    value: "it",
    name: "IT",
    positions: [
      {
        value: "junior-developer",
        name: "Junior Developer",
      },
      {
        value: "senior-developer",
        name: "Senior Developer",
      },
      {
        value: "systems-analyst",
        name: "Systems Analyst",
      }
    ]
  }
]

function UserRegistration() {
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userGender, setUserGender] = useState('')
  const [userHobbies, setUserHobbies] = useState([])
  const department = useRef(null);

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
          <label htmlFor="department">Department</label>
          <select id="department" name="department" ref={department} onChange={() => console.log(department.current.value)}>
            {departments.map((department) => {
              return (
                  <option value={department.value} key={department.value}>{department.name}</option>
              )
            })
            }
          </select>
        </div>
        <div className={"form-row"}>

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
