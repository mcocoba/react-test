var React = require('react');
var NavItem = require('./Navitem.jsx');

var NavBar = React.createClass({
  render: function(){

    var createLinkItem = function(item, index){
        return <NavItem key={item.title + index} href={item.href} title={item.title} />;
    };

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="">Product Shoper</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = NavBar;
