import React from "react";
import { NavLink } from 'react-router-dom'
import "./style.css";

function OverviewNavbar(props) {
    const { label, links } = props;

    return (
        <nav className="overview__admin-nav">
            {label && 
                <div className="overview__admin-label">
                    <span className="overview__admin-icon">
                        <i className="fa fa-tasks"></i>
                    </span>
                    {label}
                </div>
            }
            {links && links.map((link, index) => (
                <NavLink className="overview__admin-link" to={link.url} activeStyle={{ color: '#66615b' }} key={index}>
                    <i className={`fa ${link.classIcon}`}></i>
                    {link.label}
                </NavLink>
            ))}
            {/* <Link className="overview__admin-link" to="/overview?perfil"><i className="fa fa-id-card"></i>Perfil</Link>
            <Link className="overview__admin-link" to="/overview?eventos"><i className="fa fa-calendar"></i>Eventos</Link>
            <Link className="overview__admin-link" to="/overview?participantes"><i className="fa fa-users"></i>Participantes</Link> */}
        </nav>

    );
}

export default OverviewNavbar;
