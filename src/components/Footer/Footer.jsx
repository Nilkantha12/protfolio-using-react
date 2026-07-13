import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Nilkantha'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales" aria-label="Social links">
                    {/** Disabled placeholders for future links */}
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-disabled="true" onClick={(e) => e.preventDefault()}><i className="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-disabled="true" onClick={(e) => e.preventDefault()}><i className="fab fa-github"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-disabled="true" onClick={(e) => e.preventDefault()}><i className="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-disabled="true" onClick={(e) => e.preventDefault()}><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);