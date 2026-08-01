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
        value: "-",
        name: "-",
      },
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
        value: "-",
        name: "-",
      },
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
        value: "-",
        name: "-",
      },
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
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [job, setJob] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleReset() {
    setUserName('')
    setFirstName('')
    setLastName('')
    setUserGender('')
    setUserHobbies([])
    setSelectedDepartment('')
    setJob('')
    setIsSubmitted(false)
  }

  function handleSubmit() {
    setIsSubmitted(true)
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
                  <input type="radio" name="gender" id={gender.name} checked={userGender === gender.name} onChange={() => setUserGender(gender.name)}/>
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
                  <input type="checkbox" name="hobby" id={hobby.name} checked={userHobbies.includes(hobby.name)} onChange={(event) => {
                      if (event.target.checked) { setUserHobbies([...userHobbies, hobby.name]) }
                      else { setUserHobbies(userHobbies.filter(chosenHobby => chosenHobby !== hobby.name)) }
                    }}/>
                  <label htmlFor={hobby.value}>{hobby.name}</label>
                </div>
              )
            })}
          </div>
        </div>
        <div className={"form-row"}>
          <label htmlFor="department">Department</label>
          <select id="department" name="department" value={selectedDepartment} onChange={(event) => setSelectedDepartment(event.target.value)}>
            {departments.map((department) => {
              return (
                  <option value={department.value} key={department.value}>{department.name}</option>
              )
            })
            }
          </select>
        </div>
        <div className={"form-row"}>
          <label htmlFor="position">Job Position</label>
          <select id="position" name="position" value={job} onChange={(event) => setJob(event.target.value)}>
            {departments
                .find((department) => {return department.value === selectedDepartment})?.positions
                .map((position) => {
              return (
                  <option value={position.name} key={position.value}>{position.name}</option>
              )
            })
            }
          </select>
        </div>
      </div>
      <hr />
      <div className={"form-submission"}>
        <button className={"reset-button"} onClick={() => handleReset()}>Reset</button>
        <button className={"submit-button"} onClick={() => handleSubmit()}>Submit</button>
      </div>
      {isSubmitted && <div>
        <div className={"form-row"}>
          <p className="data-label">Username</p>
          <p>{userName}</p>
        </div>
        <div className={"form-row"}>
          <p className="data-label">Firstname</p>
          <p>{firstName}</p>
        </div>
        <div className={"form-row"}>
          <p className="data-label">Lastname</p>
          <p>{lastName}</p>
        </div>
        <div className={"form-row"}>
          <p className="data-label">Hobbies</p>
          <p>{userHobbies.join(", ")}</p>
        </div>
        <div className={"form-row"}>
          <p className="data-label">Gender</p>
          <p>{userGender}</p>
        </div>
        <div className={"form-row"}>
          <p className="data-label">Job</p>
          <p>{job}</p>
        </div>
      </div>}
    </div>
  );
}

export default UserRegistration;
