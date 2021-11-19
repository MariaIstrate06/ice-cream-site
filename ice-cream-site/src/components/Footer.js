import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    {/*column1*/}
                    <div className='col col-1' >
                        <h4>USEFUL INFO</h4>
                        <ul className='list-unstyled'>
                            <li>Privicy Policy</li>
                            <li title="&amp;">Terms &amp; Conditions</li>
                            <li>Cookie Policy</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    {/*column2*/}
                    <div className="col col-2">
                        <h4>YOU CAN FIND US</h4>
                        <ul className="list-unstyled">
                            <li>London, UK</li>
                            <li>Bucharest, RO</li>
                            <li>Paris, FR</li>
                            <li>Sofia, BG</li>
                        </ul>
                    </div>
                    {/*column3*/}
                    <div className="col col-3">
                        <h4 title="&amp;">ABOUT GELATO &amp; DONUTS</h4>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Store locator</li>
                            <li>Franchise</li>
                            <li>Careers</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    
                    <div className=' subscribe-media'>
                        <h4>NEWSLETTER</h4>
                        <ul className='list-unstyled'>
                            <li>
                        <form >
                             <label>
                              <input type="text" name="name"/>
                             </label>
                            <input type="SUBMIT" value="Subscribe" className='subscribeHov'/>
                        </form>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className='copyrights'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Gelato &amp; Donuts

                    </p>

                </div>

            </div>
        </div>
    )
}

export default Footer;