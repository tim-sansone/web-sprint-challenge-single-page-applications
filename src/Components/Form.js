import React from "react";


export default function Form(props){
    const { 
        form,
        formChange,
        submitForm,
        errors
    } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        formChange(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submitForm();
    }

    return (
        
        <form id="pizza-form" onSubmit={onSubmit}>
            <h1>Build Your Own Pizza</h1>
            <div className="errors">
                <p>{errors.name}</p>
                <p>{errors.size}</p>
                <p>{errors["special-text"]}</p>
            </div>
            <div className="form-section">
                <h2>Your Info</h2>
                <label>Name
                    <input 
                        id="name-input"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className="form-section">

                <label>
                    <h2>Choose a Size</h2>
                    <select
                        id="size-dropdown"
                        name="size"
                        value={form.size}
                        onChange={onChange}
                    >
                        <option value="">-- Select a Size --</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                        <option value="party">Party</option>
                    </select>
                </label>
            </div>
            <div className="form-section">
                <h2>Add Toppings</h2>
                <label>Pepperoni
                    <input 
                        name="pepperoni"
                        type="checkbox"
                        value={form.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                        name="sausage"
                        type="checkbox"
                        value={form.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>Bacon
                    <input 
                        name="bacon"
                        type="checkbox"
                        value={form.bacon}
                        onChange={onChange}
                    />
                </label>
                <label>Mushroom
                    <input 
                        name="mushroom"
                        type="checkbox"
                        value={form.mushroom}
                        onChange={onChange}
                    />
                </label>
                <label>Onion
                    <input 
                        name="onion"
                        type="checkbox"
                        value={form.onion}
                        onChange={onChange}
                    />
                </label>
                <label>Green Pepper
                    <input 
                        name="green-pepper"
                        type="checkbox"
                        value={form["green-pepper"]}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className="form-section">
                <h2>Special Instructions</h2>
                <label>
                    <input
                        id="special-text"
                        name="special-text"
                        type="textarea"
                        value={form["special-text"]}
                        onChange={onChange}
                    />
                </label>
            </div>
            <button id="order-button">Submit</button>

        </form>

    )
}