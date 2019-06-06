import React from 'react'

const withAuthenticate = FirstComp => 
    class extends React.Component {
        render(){
            return <FirstComp />
        }
    }

export default withAuthenticate;