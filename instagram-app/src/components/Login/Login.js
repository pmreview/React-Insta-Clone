import React from 'react';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            loggedIn: false,
        }
    }
    
    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitLogin = event => {
        const username = this.state.username;
        const password = this.state.password;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        this.setState({ loggedIn: true });
        window.location.reload();
    }

    render() {
        return (
            <form onSubmit={this.submitLogin}>
                <input
                    placeholder="Username"
                    onChange={this.handleChanges}
                    value={this.state.username}
                    name="username"
                    type="text"
                />
                <input
                    placeholder="Password"
                    onChange={this.handleChanges}
                    value={this.state.password}
                    name="password"
                    type="password"
                />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login;