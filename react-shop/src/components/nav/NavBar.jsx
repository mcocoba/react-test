var React = require('react');
var NavItem = require('./NavItem.jsx');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
            <Link className="navbar-brand" to="/">Product Shoper</Link>
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
