import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object({
    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});


const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log("values added", values);

        }

    });
    return (
        <div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="smvit@gmail.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                />
                {formik.errors.email && (
                    <p className="text-danger">{formik.errors.email}</p>
                )}
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••••"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                />
                {formik.errors.password && (
                    <p className="text-danger">{formik.errors.password}</p>
                )}
            </div>

            <button className="btn btn-signin w-100" onClick={formik.handleSubmit}>
                Sign In
            </button>

            <p className="text-center mt-3">
                No account? <a href="/register">Create Account</a>
            </p>


        </div>
    )
}

export default LoginForm