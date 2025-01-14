import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
    const {name,value}=evt.target
    update(name,value)
    
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
    evt.preventDefault()
    submit()
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
       
        <label>Username
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */
          }
          <input type='text' value={values.username} onChange={onChange} 
          placeholder='type a user name ...'  name='username' maxLength='20'
           />
        </label>

        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input type='email' name='email' placeholder='type an email ...'
           value={values.email}  onChange={onChange}/>
        </label>

       
        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select  name='role' onChange={onChange} value={values.role}>
            <option value="">---Select a Role---</option>
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="alumni">Alumni</option>
            

          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
