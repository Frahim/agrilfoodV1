"use client";
import React from "react";

function Form() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "145c85b0-29e0-4b96-8252-250deff02c2a");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return (
        <div className="App">
          
            <form onSubmit={onSubmit} className="innerContainer">
            <h1>Get in touch</h1>
            <input type="hidden" name="subject" value="New Submission from Agril Foods"></input>
            <input type="hidden" name="redirect" value="https://agrilfoods.com/contact"></input>
                <div className="name block">
                    <div>
                        <label htmlFor="frm-first">First Name</label>
                        <input
                            id="frm-first"
                            type="text"
                            name="first"
                            autoComplete="given-name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="frm-last">Last Name</label>
                        <input
                            id="frm-last"
                            type="text"
                            name="last"
                            autoComplete="family-name"
                            required
                        />
                    </div>
                </div>
                <div className="email block">
                    <label htmlFor="frm-email">Email</label>
                    <input
                        id="frm-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="block phone">
                    <label htmlFor="frm-phone">Phone</label>
                    <input
                        id="frm-phone"
                        type="text"
                        name="phone"
                        autoComplete="tel"
                        required
                    />
                </div>

                <div className="message block">
                    <label htmlFor="frm-message">Message</label>
                    <textarea id="frm-message" name="message"></textarea>
                </div>
                <div className="button block">
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <span className="sucessMassage">{result}</span>
        </div>
    );
}

export default Form;
