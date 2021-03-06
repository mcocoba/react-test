var React = require('react');

var NameField = React.createClass({
  getInitialState: function(){
    return {value:""}
  },
  onChange: function(e){
      this.setState({value:e.target.value})
  },
  clear: function(){
    this.setState({value:""});
  },
  render: function(){
    return (
      <div>
        <input className="form-control" onChange={this.onChange} placeholder={this.props.type + " Name"} value={this.state.value}/>
      </div>
    );
  }
});

module.exports = NameField;
