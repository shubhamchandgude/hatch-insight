import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Login = () => {
    return (
        <>
            <section className="main-section-login triple-cloud">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="login-wrap">
                                <div className="form-login">
                                    <div className="col-sm-12 text-center">
                                        <img width="443" src="https://rmsstaging.hatchearlychildhood.com/images/insight/insights_logo.png" alt="" className="img-fluid" />
                                    </div>
                                    <form autoComplete='off' action="/" className="form-horizontal" id='login-form' method='post'>
                                        <div className="login-message">
                                            <h3>Please Log In</h3>
                                        </div>
                                        <div className="form-group mt-3 no-gutters">
                                            <div className="col-sm-12 text-left">
                                                <input type='hidden' name='LoginForm' value='/' />
                                                <label htmlFor='LoginForm_username' className='control-label pl-2'>Email Address</label>
                                                <div className="input-block">
                                                    <input autoComplete='off' placeholder='Enter your email' type="email" id="LoginForm_username" className='form-control is-required-email' maxLength='50' tabIndex='1' required />
                                                    <p className="errorlabel mb-0"></p>
                                                    <div className="errorMessage" id='LoginForm' style={{ display: 'none' }}></div>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group no-gutters">
                                            <div className="col-sm-12 text-left">
                                                <label htmlFor='LoginForm_password' className='control-label pl-2'>Password</label>
                                                <div className="input-block">
                                                    <input autoComplete='off' type="password" placeholder='Enter your password' id="LoginForm_password" className='form-control errorfield' maxLength='50' tabIndex='2' name='LoginForm[password]' required/>
                                                    <a className='pass-toggle toggled' id='LoginForm_show' href="#" title='Show Password'></a>
                                                </div>
                                                <p class="errorlabel mb-0" style={{ display: "none" }}>Your password must be at least 6 characters</p>
                                                <p className="errorlabel mb-0"></p>
                                                <div className="errorMessage" id="LoginForm_password_em_" style={{ display: "none" }}></div>
                                                <p></p>
                                                <p className="errorlabel mb-0" id="info_alert" style={{ display: "none" }}></p>
                                            </div>
                                        </div>
                                        <div className="mt-30">
                                            <button className="btn btn-block btn-login" id="setPassBtn" type='submit' tabIndex='3'>Log In</button>
                                            <div className="login-extra-links mt-30">
                                                <a href="https://rmsstaging.hatchearlychildhood.com/site/forgotpassword?token=mlsipqtnkhejcbforagd">Forget your password?</a>
                                                |
                                                <a target="_blank" href="https://support.hatchearlylearning.com/hc/en-us/articles/4526935151380">Login Help </a>
                                                |
                                                <a target="_blank" href="https://support.hatchearlylearning.com/hc/en-us/articles/360057006572">How do I get an account?</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="sign-with-classlink mt-5 mt-md-4 mt-lg-5">
                                <a href="https://launchpad.classlink.com/oauth2/v2/auth?scope=full,profile&red…&client_id=c16021754185055cafb4470494668704b25cbcc7c466&response_type=code" target="_blank">
                                    <img width='300px' src="https://rmsstaging.hatchearlychildhood.com/images/insight/sign-with-classlink.png" className="img-fluid" alt='signImage'></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //Footer */}
                <div className="footer full-width-footer">
                    <ul className="footer-links">
                        <li>
                            ©
                            <span>2023 Hatch, Inc.&emsp;|</span>
                        </li>
                        <li>
                            <span>
                                <a href="https://www.hatchearlylearning.com" target="_blank" rel="noopener"> HatchEarlyLearning.com</a>
                                &emsp;|
                            </span>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            &nbsp;&nbsp;&nbsp;
                            <span>1.800.624.7968 option 4</span>
                        </li>
                    </ul>
                </div>
                <div className="help-button">
                    <button className='btn btn-primary'>
                        <i className="fa-regular fa-circle-question"></i>
                        Help
                    </button>
                </div>
            </section>
        </>
    )
}

export default Login;