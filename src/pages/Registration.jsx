import React from 'react';
class Registration extends React.Component{
 constructor(props){
     super(props);
     this.onClick = this.onClick.bind(this);
     this.state={
         FirstName : '',
         LastName  : '',
         Email     : '',
         PassWord  : '',
         Cpassword : '',
         Phone     : '',
         country   : '',
         state     : '',
         city      : '',
         pincode   : ''
     }
 }
    onClick(event){
        this.setState({
            FirstName : event.target.value,
            LastName  : event.target.value,
            Email     : event.target.value,
            Password  : event.target.value,
            Cpassword : event.target.value,
            Phone     : event.target.value,
            country   : event.target.value,
            state     : event.target.value,
            city      : event.target.value,
            pincode   : event.target.value
        })
    }
    render(){
        return(
             <div className="container-fluid">
            <div class="row">
                <div class = "col-xs-6 col-sm-3">
        <div className="form-group">
          <label for="name">FirstNamae:</label>
          <input
            type="name" disabled={this.state.FirstName.length ? false : true}
            class="form-control"
            id="fn"
            placeholder="please enter ur firstnaem"
          onChange={this.onClick} value={this.state.FirstName}/>
                    </div>
                    <div className="'form-group">
                        <label for="name">LastName:</label>
                        <input type="name" disabled={this.state.LastName.length ? false : true}
                            class="form-control"
                            id="ln"
                            placeholder="please enter ur lastname"
                            onChange={this.onClick} value={this.state.LastName}
                    </div>
                            <div className="'form-group">
                        <label for="email">Email:</label>
                        <input type="email" disabled={this.state.Email.length ? false : true}
                            class="form-control"
                            id="mail"
                            placeholder="please enter ur mail"
                            onChange={this.onClick} value={this.state.Email}/>
                    </div>
                            <div className="'form-group">
                        <label for="password">Password:</label>
                        <input type="password" disabled={this.state.Password.length ? false : true}
                            class="form-control"
                            id="pass1"
                            placeholder="please enter ur lastname"
                            onChange={this.onClick} value={this.state.Password}/>
                    </div>
                            <div className="'form-group">
                        <label for="password">Cpassword:</label>
                        <input type="password" disabled={this.state.Cpassword.length ? false : true}
                            class="form-control"
                            id="pass2"
                            placeholder="please enter ur lastname"
                            onChange={this.onClick} value={this.state.Cpassword}
                    </div>
                            <div className="'form-group">
                        <label for="name">LastName:</label>
                        <input type="name" disabled={this.state.LastName.length ? false : true}
                            class="form-control"
                            id="ln"
                            placeholder="please enter ur lastname"
                            onChange={this.onClick} value={this.state.LastName.length ? false : true}
                    </div>
                            <div className="'form-group">
                        <label for="name">LastName:</label>
                        <input type="name" disabled={this.state.LastName.length ? false : true}
                            class="form-control"
                            id="ln"
                            placeholder="please enter ur lastname"
                            onChange={this.onClick} value={this.state.LastName.length ? false : true}
                    </div>
        )
    }
}