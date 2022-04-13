import {useState, useEffect} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {FaUser} from 'react-icons/fa' 
import {Button, Form} from 'react-bootstrap'
import {register} from '../actions/userActions'

function Register() {   

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() =>{
        if(userInfo){
            navigate('/')
        }
    },[navigate, userInfo, dispatch])

    const submitHandler =(e) =>{
        e.preventDefault()
        dispatch(register(name, email, password))
    }

  return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className='form-container'>
            <form onSubmit={submitHandler} method="POST">
                <div className="form-group">

                <input type="text" className="form-control" id='name' name='name' value={name} placeholder='enter name' onChange={(e) => setName(e.target.value)}/>

                </div>

                <div className="form-group">

                    <input type="email" className="form-control" id='email' name='email' value={email} placeholder='enter email' onChange={(e) => setEmail(e.target.value)}/>
                
                </div>

                <div className="form-group">

                    <input type="password" className="form-control" id='password' name='password' value={password} placeholder='enter password' onChange={(e) => setPassword(e.target.value)}/>
                
                </div>

                <div className="form-group">

                    <input type="password" className="form-control" id='password2' name='password2' value={password2} placeholder='confirm password' onChange={(e) => setPassword2(e.target.value)}/>
                
                </div>

                <button type='submit' className='btn btn-success btn-block' >Register</button>
            </form>
        </section>
    </>
  )
}

export default Register