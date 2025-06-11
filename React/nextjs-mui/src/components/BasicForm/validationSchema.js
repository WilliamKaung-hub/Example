

import * as yup from "yup";

export const schema = yup.object({
    name:yup.string().required("Name is required"),
    email:yup.string().email("Invalid email").required("Email is required"),
    phone: yup.number().positive().integer().required("Age is required"),
    role:yup.string().required("Role is required"),
})