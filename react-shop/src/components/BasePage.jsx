var React = require('react');
var NavBar = require('./nav/NavBar.jsx');
var LeadCapture = require('./forms/LeadCapture.jsx');

var navLinks = [{
    title: "Home",
    href:"/"
}];

var BasePage = React.createClass({
    render: function(){
        return (
            <div>
                <NavBar navData={navLinks}/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            {this.props.children}
                        </div>
                        <div className="col-sm-3">
                            <LeadCapture />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = BasePage;
