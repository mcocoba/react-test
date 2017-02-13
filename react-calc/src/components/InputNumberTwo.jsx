var React = require('react');

var InputNumberTwo = React.createClass({
  render: function(){
    return (
        <div className="form-group">
          <input className="form-control" placeholder="NUMBER e.g. 34222"/>
        </div>
    );
  }
});

module.exports = InputNumberTwo;
