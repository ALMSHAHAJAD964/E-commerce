import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from '../../assets/image/logo.webp';
import Googleimg from '../../assets/image/zKvDw.png'; // Fixed line
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const SignUp = () => {
    const context = useContext(MyContext)

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    }, []);
    return (
        <section className="section signInPage signUpPage">
            <div className="shape-bottom"><svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{ enablebackground: 'new 0 0 1921 819.8' }}>
                <path
                    className="st0"
                    d="M1921,413.1v406.7H0V0.5h0.4l228c104.4,36.2,209.2,72.7,313.5,110c80.6,28.9,161.1,57.8,241.7,86.7
                  c113.7,40.7,227.4,81.4,341,122.2c52.3,18.8,104.6,37.5,157,56.2c69.2,24.7,138.4,49.5,207.6,74.2c114.7,41,229.4,81.9,344.1,122.9
                  c65.1,23.2,130.2,46.5,195.3,69.7c72.1,25.7,144.2,51.5,216.3,77.2c2.4,0.9,4.8,1.8,7.2,2.7C1909.8,413.1,1915.4,97.5-26.6L1921,400.5v413.1z"
                ></path>
            </svg></div>
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img src={Logo} alt="Logo" style={{ width: '100px', height: '100' }} />
                    </div>

                    <form className="mt-2">
                        <h2 className="mb-3">Sign Up</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Name" type="text" required variant="standard" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField id="standard-basic" label="Phone No." type="phoneNumber" required variant="standard" className="w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100" />
                        </div>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Password" type="password" required variant="standard" className="w-100" />
                        </div>
                    </form>


                    <a className="border-effect cursor" style={{ marginLeft: '30px' }}>Forgot Password?</a>

                    <div className="d-flex align-items-center mt-3 mb-3">
                        <div className="row w-100">
                            <div className="col-md-6">
                                <Button
                                    className="btn-blue btn-lg btn-big w-100"
                                    style={{
                                        width: '150px', // Set the same width
                                        height: '50px', // Set the same height
                                        margin: '10px 29px', // Consistent margins
                                        padding: '10px 20px', // Consistent padding
                                        fontSize: '16px', // Matching font size
                                    }}>Sign In</Button>
                            </div>

                            <div className="col-md-6 pr-0">
                                <Link to="/" className="d-block w-100" style={{ textDecoration: 'none' }}>
                                    <Button
                                        className="btn-lg btn-big w-100 ml-3"
                                        style={{
                                            width: '150px', // Same width
                                            height: '50px', // Same height
                                            margin: '10px 40px', // Consistent margins
                                            padding: '10px 20px', // Consistent padding
                                            fontSize: '16px', // Matching font size
                                        }}
                                        variant="outlined" onClick={() => context.setisHeaderFooterShow(true)}
                                    >Cancel</Button></Link>
                            </div>

                        </div>



                    </div>



                    <p className="txt"> Not Registered?<Link to="/signIn"
                     className="border-effect">Sign In</Link></p>

                    <h6 className="mt-3 text-center font-weight-bold">Or continue with social account</h6>

                    {
                    /* img add karna hai baad ma karta hu 
                     <Button className="loginWithGoogle" variant="outlined">
                        <img src={Googleimg}/>Sign In with Google
                    </Button> */}
                    <ul className="list list-inline mt-3 mb-1 socials text-center">
                        <li className="list-inline-item">
                            <Link to=""><FaFacebookSquare /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""><FaTwitterSquare /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""><FaInstagramSquare /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""><FaWhatsappSquare /></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to=""><FaGooglePlay /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default SignUp;