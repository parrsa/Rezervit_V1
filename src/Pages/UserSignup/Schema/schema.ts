import * as yup from "yup";

export const Schema = yup.object().shape({
	name: yup.string().required("username is required."),
	password: yup.string().required("username is required."),
	national_id: yup.number().required("username is required."),
	phone_number: yup.number().required("username is required."),
});