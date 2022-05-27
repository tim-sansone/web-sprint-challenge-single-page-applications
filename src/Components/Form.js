import React from "react";


export default function Form(props){
    const { 
        form,
        formChange,
        submitForm,
        disabled,
        errors,
        serverRes
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
        
        <>
        <form id="pizza-form" onSubmit={onSubmit}>
            <h1>Build Your Own Pizza</h1>
            <div className="errors">
                <p>{errors.name}</p>
                <p>{errors.email}</p>
                <p>{errors.phone}</p>
                <p>{errors.size}</p>
                <p>{errors.crust}</p>
                <p>{errors.cheese}</p>
                <p>{errors.sauce}</p>
                <p>{errors["special-text"]}</p>
            </div>
            <div className="form-section info">
                <h2>Your Info</h2>
                <label>Name
                    <input 
                        id="name-input"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Pleae enter your name"
                    />
                </label>
                <label>Email
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="Please enter your email"
                    />
                </label>
                <label>Phone Number
                    <input
                        name="phone"
                        type="text"
                        value={form.phone}
                        onChange={onChange}
                        placeholder="Please enter your phone number"
                    />
                </label>
            </div>
            <div className="form-section size">
                <h2>Size</h2>
                <label>    
                    <select
                        id="size-dropdown"
                        name="size"
                        value={form.size}
                        onChange={onChange}
                    >
                        <option value="">-- Select --</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra-large">Extra Large</option>
                        <option value="party">Party</option>
                    </select>
                </label>
            </div>
            <div className="form-section crust">
                <h2>Crust</h2>
                <label>Brooklyn Style
                    <input
                        name="crust"
                        type="radio"
                        value="brooklyn-style"
                        checked={form.crust === "brooklyn-style"}
                        onChange={onChange}
                    />
                </label>
                <label>Hand-Tossed
                    <input
                        name="crust"
                        type="radio"
                        value="hand-tossed"
                        checked={form.crust === "hand-tossed"}
                        onChange={onChange}
                    />
                </label>
                <label>Crunchy Thin Crust
                    <input
                        name="crust"
                        type="radio"
                        value="crunchy-thin-crust"
                        checked={form.crust === "crunchy-thin-crust"}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className="form-section cheese">
                <h2>Cheese</h2>
                <select
                    name="cheese"
                    value={form.cheese}
                    onChange={onChange}
                >
                    <option value="">-- Select --</option>
                    <option value="none">None</option>
                    <option value="light">Light</option>
                    <option value="normal">Normal</option>
                    <option value="extra">Extra</option>
                </select>
            </div>
            <div className="form-section sauce">
                <h2>Sauce</h2>
                    <label>Robust Tomato
                        <input
                            name="sauce"
                            type="radio"
                            value="robust-tomato"
                            checked={form.sauce === "robust-tomato"}
                            onChange={onChange}
                        />
                    </label>
                    <label> Honey BBQ
                        <input
                            name="sauce"
                            type="radio"
                            value="honey-bbq"
                            checked={form.sauce === "honey-bbq"}
                            onChange={onChange}
                        />
                    </label>
                    <label>Garlic Parmesan
                        <input
                            name="sauce"
                            type="radio"
                            value="parmesan"
                            checked={form.sauce === "parmesan"}
                            onChange={onChange}
                        />
                    </label>
                    <label>None
                        <input
                            name="sauce"
                            type="radio"
                            value="none"
                            checked={form.sauce === "none"}
                            onChange={onChange}
                        />
                    </label>
            </div>
            <div className="form-section toppings">
                <h2>Add Toppings</h2>
                <div className="meat-toppings">
                    <h3>Meat</h3>
                    <label>Pepperoni
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            checked={form.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Italian Sausage
                        <input 
                            name="sausage"
                            type="checkbox"
                            checked={form.sausage}
                            onChange={onChange}
                        />
                    </label>
                    <label>Bacon
                        <input 
                            name="bacon"
                            type="checkbox"
                            checked={form.bacon}
                            onChange={onChange}
                        />
                    </label>
                    <label>Ham
                        <input 
                            name="ham"
                            type="checkbox"
                            checked={form.ham}
                            onChange={onChange}
                        />
                    </label>
                    <label>Beef
                        <input 
                            name="beef"
                            type="checkbox"
                            checked={form.beef}
                            onChange={onChange}
                        />
                    </label>
                    <label>Salami
                        <input 
                            name="salami"
                            type="checkbox"
                            checked={form.salami}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className="veggie-toppings">
                    <h3>Veggies</h3>
                    <label>Mushrooms
                        <input 
                            name="mushrooms"
                            type="checkbox"
                            checked={form.mushrooms}
                            onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input 
                            name="onions"
                            type="checkbox"
                            checked={form.onions}
                            onChange={onChange}
                        />
                    </label>
                    <label>Green Peppers
                        <input 
                            name="green-peppers"
                            type="checkbox"
                            checked={form["green-peppers"]}
                            onChange={onChange}
                        />
                    </label>
                    <label>Black Olives
                        <input 
                            name="black-olives"
                            type="checkbox"
                            checked={form["black-olives"]}
                            onChange={onChange}
                        />
                    </label>
                    <label>Diced Tomatoes
                        <input 
                            name="diced-tomatoes"
                            type="checkbox"
                            checked={form["diced-tomatoes"]}
                            onChange={onChange}
                        />
                    </label>
                    <label>Roated Red Peppers
                        <input 
                            name="roasted-red-peppers"
                            type="checkbox"
                            checked={form["roasted-red-peppers"]}
                            onChange={onChange}
                        />
                    </label>
                </div>
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
            <button id="order-button" disabled={disabled}>Submit</button>

        </form>
        <div>
            {serverRes && JSON.stringify(serverRes)}
        </div>
        </>
    )
}