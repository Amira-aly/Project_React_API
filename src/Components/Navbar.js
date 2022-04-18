import { Component } from "react";
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component{
    render (){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark  ">
                <NavLink className="navbar-brand pr-2 text-info "  exact to="/">
                <span className="material-icons-sharp px-2">leaderboard</span>
                Dashboard
                </NavLink> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link"  exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link" to="/create_post">Add Posts</NavLink>
                        </li>
                    </ul>             
                </div>
            </nav>
  
        );
    }
    
}
export default Navbar;