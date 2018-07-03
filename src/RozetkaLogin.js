import React from 'react';

import axios from 'axios';

export default class RozetkaLogin extends React.Component {
  state = {
    username: '',
	password: ''
  }


  handleUserChange(event) {
    this.setState({username: event.target.value});
  }
  
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  

  handleSubmit = event => {
    event.preventDefault();

    const userId = {
      userId: this.state.userId
    };

    axios.post(`https://api.seller.rozetka.com.ua/sites`)
      .then(res => {
        const problems = res.data;
        this.setState({ problems });
      })
  }



  render() {
    return (
	  <div className="container">
      <h3>Форма реєстрації</h3>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Логін</label>
		  <input type="text" className="form-control"
            value={this.state.username} onChange={this.handleUserChange}/>
        </div>
        <div className="form-group">
          <label>Пароль</label>
		  <input type="password" className="form-control"
            value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        
        <button type="submit">ВХІД</button>
      </form>
      </div>
    )
  }
}