import React from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      mail: '',
      passwords: ''
    };
  }
  onChange(event) {
    this.setState({
      mail: event.target.value
    });
  }
    onClick(event){
        this.setState({
            passwords:event.target.value
        });
    }
  render() {
    return (
        
      <div className="container-fluid">
            <div class="row">
                <div class = "col-xs-6 col-sm-3">
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="please enter ur email"
          onChange={this.onChange} value={this.state.email}/>
        </div>
        <div className="form-group">
          <label for="password">Password : </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="please enter ur password"
              onChange={this.onClick} value={this.state.passwords}
          />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />{" "}
            Remember
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      <button type="submit" class="btn btn-secondary">NewUser</button>
      </div>
            </div>
        </div>
    );
  }
}
export default Login;
