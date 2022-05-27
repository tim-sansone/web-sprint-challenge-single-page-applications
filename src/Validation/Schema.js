import * as yup from "yup";

const schema = yup.object().shape({
    name: yup
            .string()
            .trim()
            .required("Please enter your name")
            .min(2, "name must be at least 2 characters"),
    size: yup
            .string()
            .oneOf(["small", "medium", "large", "extra-large", "party"], "Please select a size"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    mushroom: yup.boolean(),
    onion: yup.boolean(),
    ["green-pepper"]: yup.boolean(),
    ["special-text"]: yup
                        .string()
                        .trim()
                        .max(140, "Special Instructions can be no more than 140 characters")
})





export default schema;