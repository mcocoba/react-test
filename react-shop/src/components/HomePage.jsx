var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ProductPage = React.createClass({
    render: function(){
        return (
            <div>
                <ul>
                    <li><Link to="/product/55" >Paletas Enchilosas </Link> </li>
                    <li><Link to="/product/60" >Bolitochas</Link> </li>

                </ul>

            </div>
        );
    }
});

module.exports = ProductPage;
