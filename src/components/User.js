import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    static defaultProps = {
        name: "Bilgi Yok",
        department: "Bilgi Yok",
        salary: "Bilgi Yok"
    }
    render() {

        //Destructing
        const { name, department, salary } = this.props;
        return (
            <div>
                <ul>
                    <li>İsim : {name} </li>
                    <li>Departman : {department}</li>
                    <li>Maaş : {salary}</li>
                </ul>
            </div>
        )
    }
}
/*User.defaultProps = {
    name : "Bilgi Yok",
    department : "Bilgi Yok",
    salary : "Bilgi Yok"
}*/
User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}
export default User;
