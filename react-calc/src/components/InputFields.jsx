var React = require('react');
var InputNumberOne = require('./InputNumberOne.jsx');
var InputNumberTwo = require('./InputNumberTwo.jsx');

var InputFields = React.createClass({
  render: function(){
    return (
        <div className="row">
          <div className="col-md-6">
            <InputNumberOne />
          </div>
          <div className="col-md-6">
            <InputNumberTwo />
          </div>
        </div>
    );
  }
});

module.exports = InputFields;
