import RegisterHeader from "./RegisterHeader";
import RegisterForm from "./RegisterForm";
import '../Login/Login.css';

const Register = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow login-card" style={{ width: "420px" }}>
                <RegisterHeader />
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;