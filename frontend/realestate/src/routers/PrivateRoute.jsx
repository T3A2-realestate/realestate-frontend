import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../utils/userContext'
import Loading from '../pages/Loading'

const PrivateRoutes = (props) => {
    
    const navigateTo = useNavigate()
    const {state: currentUserState} = useContext(userContext)

    return (
        <Fragment>
            { localStorage.getItem('token') ? 
               ( currentUserState.user ? 
                props.children : <Loading />)
            :
            navigateTo('/')
             }
        </Fragment>
    )
}

export default PrivateRoutes
