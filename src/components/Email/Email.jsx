import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from '../../assets/login.png';

const Email = () => {
    return (
        <div className="row">
                <div className="col-sm-12 col-md-6">
                <h1 className='text-center'>Contact With Us</h1>
                <div className="input-group input-group-lg my-3">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Name' />
                </div>
                <div className="input-group input-group-lg my-3">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"placeholder='Email'/>
                </div>
                <div className="input-group input-group-lg my-3">
                    <textarea className="form-control" aria-label="With textarea" placeholder='Message'></textarea>
                </div>
                <div className="input-group input-group-lg my-3">
                    <Button variant="success" size="lg" type="submit">Submit</Button>
                </div>
            
              </div>
                <div className="col-sm-12 col-md-6 text-center">
                    <img src={Image} alt="" className='img-fluid'/>
                </div>
            </div>
    );
};

export default Email;