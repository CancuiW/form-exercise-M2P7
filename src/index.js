import React ,{useState}from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pet,setPet]=useState(petsList)
  const [formValue, setFormValue] = useState({ petName: '', petType: '' })
  
  const change=evt=>{
    const {name,value}=evt.target
    setFormValue({...formValue,[name]:value})

  }
  //Array1=[1,2,3] Array2=[7,8,9]
  //Array3=Array1.concat(Array2)
  //Array3=[1,2,3,7,8,9]
  //Array is a method to conbine two array 
  const onSubmit=evt=>{
    evt.preventDefault()
    setPet(pet.concat({petName:formValue.petName,petType:formValue.petType}))
    //initialize the input content
    setFormValue({ petName: '', petType: '' })

  }
  return (
    <div className='container'>
      <h1>Simple Form App</h1>

      {
        pet.map((x,idx) => {
          return (
            <p key={idx}>{x.petName} is a  {x.petType}</p>
          )
          
        })
      }
      <form onSubmit={onSubmit}>
        <input type='text' name='petName' value={formValue.petName} onChange={change} />
        <input type='text' name='petType' value={formValue.petType} onChange={change} />
        <input type='submit' value='create a pet'/>
      </form>


    </div>
    
  )
}

render(
  <>
    <SimpleForm />
    <App /> 
  </>
  , document.querySelector('#root')
)
