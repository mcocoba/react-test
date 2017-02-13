var React = require('react');
var InputFields = require('./InputFields.jsx');

var Calc = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h2>Simple Calculator</h2>
          </div>
        </div>
        <InputFields  />
      </div>
    );
  }
});

module.exports = Calc;
