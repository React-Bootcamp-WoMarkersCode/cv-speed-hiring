import React from 'react';
import './style.css';

const ListAdminItens = (props) => {
    const { title, label, index, icon } = props;

    return(
        <>
            <ul className="list-admin">
                <li className="list-admin__item">
                    <h3 className="list-admin__title">
                        <span className="list-admin__icon" aria-hidden="true">
                            <i className={icon}></i>
                        </span>
                        <strong>
                            {title}
                            <span>{label}</span>
                        </strong>
                    </h3>
                    <div className="list-admin__controls">
                        <a href={`/${index}`} className="list-admin__controls-edit">
                            <i className="fa fa-edit"></i>
                        </a>
                        <a href={`/${index}`} className="list-admin__controls-delete">
                            <i className="fa fa-trash"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default ListAdminItens;
