import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className='foooter flex justify-center'>
            <div className="container skill">
                <div className="row copy">
                    <div className="col-12 col-sm-12 col-md-12 d-flex justify-content-center align-items-center justify-content-between">
                        <small>Copyright &copy; 2021 Maria Kamal</small>
                        <div className="d-flex align-items-center dev">
                            <h6> <span></span> Developed with Love and Care</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;