import * as yup from "yup";

const schema = yup.object().shape({
    name: yup
            .string()
            .trim()
            .required("Please enter your name")
            .min(2, "name must be at least 2 characters"),
    email: yup
            .string()
            .trim()
            .email("Please enter a valid email")
            .required("Please enter your email"),
    phone: yup
            .number()
            .typeError("Please enter a valid phone number")
            .required("Please enter a valid phone number"),
    size: yup   
            .string()
            .oneOf(["small", "medium", "large", "extra-large", "party"], "Please select a size"),
    crust: yup
            .string()
            .oneOf(["brooklyn-style", "hand-tossed", "crunchy-thin-crust"], "Please choose a crust option"),
    cheese: yup
            .string()
            .oneOf(["none", "light", "normal", "extra"], "Please choose a cheese option"),
    sauce: yup
            .string()
            .oneOf(["robust-tomato", "honey-bbq", "parmesan", "none"], "Please choose a sauce option"),
    
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    ham: yup.boolean(),
    beef: yup.boolean(),
    salami: yup.boolean(),
    mushrooms: yup.boolean(),
    onions: yup.boolean(),
    ["green-peppers"]: yup.boolean(),
    ["black-olives"]: yup.boolean(),
    ["diced-tomatoes"]: yup.boolean(),
    ["roasted-red-peppers"]: yup.boolean(),
    ["special-text"]: yup
                        .string()
                        .trim()
                        .max(140, "Special Instructions can be no more than 140 characters")
})





export default schema;