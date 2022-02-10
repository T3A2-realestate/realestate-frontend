import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../utils/userContext'
import Loading from '../pages/Loading'

const PrivateRoutes = (props) => {
    
    const navigate = useNavigate()
    const {state: userState} = useContext(userContext)

    return (
        <Fragment>
            { localStorage.getItem('token') ? 
               ( userState.user ? 
                props.children : <Loading />)
            :
            navigate('/')
             }
        </Fragment>
    )
}

export default PrivateRoutes
