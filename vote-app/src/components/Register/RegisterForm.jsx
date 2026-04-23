import { useFormik } from "formik";
import * as Yup from "yup";

const registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Register Submitted:", values);
    },
  });

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
        />
        {formik.errors.name && (
          <p className="text-danger">{formik.errors.name}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="you@college.edu"
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
        Sign Up
      </button>

      <p className="text-center mt-3">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default RegisterForm;