var React = require('react');

var InputNumberOne = React.createClass({
  render: function(){
    return (
        <div className="form-group">
          <input className="form-control" placeholder="NUMBER e.g. 13123"/>
        </div>
    );
  }
});

module.exports = InputNumberOne;
