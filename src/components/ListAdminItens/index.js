import React from 'react';
import './style.css';

const ListAdminItens = (props) => {
    const { title, label, index } = props;

    return(
        <>
            <ul className="list-admin">
                <li className="list-admin__item">
                    <h3 className="list-admin__title">
                        <span className="list-admin__icon" aria-hidden="true">
                            <i className="fa fa-calendar"></i>
                        </span>
                        <strong>
                            {title}
                            <span>{label}</span>
                        </strong>
                    </h3>
                    <div className="list-admin__controls">
                        <a href={`/${index}`}>
                            <i className="fa fa-edit"></i>
                        </a>
                        <a href={`/${index}`}>
                            <i className="fa fa-trash"></i>
                        </a>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default ListAdminItens;
