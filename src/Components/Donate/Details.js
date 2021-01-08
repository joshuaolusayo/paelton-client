import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const Details = () => {
	const publicKey = "pk_test_1d140974982d6e6953f454e01c4e7c670034afdb";
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [amount, setAmount] = useState("");

	const componentProps = {
		email,
		amount,
		metadata: {
			name,
			phone,
		},
		publicKey,
		text: "Pay Now",
		onSuccess: () => alert("Thanks for giving to the cause."),
		// onClose: () => alert("Wait! Do you intend to change your mind?"),
	};

	return (
		<div className="container my-5 my-lg-8 details px-4 px-md-0">
			<div className="row">
				<div className="col-sm-8 col-md-6 col-lg-5 mx-auto">
					<div className="checkout-form shadow px-3 py-5">
						<div className="checkout-field">
							<label className="mr-3">Name</label>
							<input className="w-100 border-0" type="text" id="name" onChange={(e) => setName(e.target.value)} />
						</div>
						<div className="checkout-field mt-3">
							<label>Email</label>
							<input className="w-100 border-0" type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className="checkout-field mt-3">
							<label>Phone</label>
							<input className="w-100 border-0" type="text" id="phone" onChange={(e) => setPhone(e.target.value)} />
						</div>
						<div className="checkout-field mt-3">
							<label>Amount</label>
							<input className="w-100 border-0" type="number" id="phone" onChange={(e) => setAmount(e.target.value * 100)} />
						</div>
						<PaystackButton className="btn bg-outline-pry w-100 mx-auto mt-3" {...componentProps} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
