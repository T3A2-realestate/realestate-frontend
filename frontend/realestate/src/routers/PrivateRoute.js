import React, { Fragment, useContext } from 'react'
import { useHistory } from 'react-router'
import { userContext } from '../utils/userContext'
import Loading from '../layout/Loading'

const PrivateRoutes = (props) => {

    const history = useHistory()
    const {state: currentUserState} = useContext(userContext)

    return (
        <Fragment>
            { localStorage.getItem('token') ? 
               ( currentUserState.user ? 
                props.children : <Loading />)
            :
             history.push('/')
             }
        </Fragment>
    )
}

export default PrivateRoutes
