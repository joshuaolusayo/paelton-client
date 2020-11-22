import React from "react";

const Login = () => {
	return (
		<div className="container-fluid px-2 px-sm-auto bg-pry auth">
			<div className="row no-gutters">
				<div className="col-sm-10 col-md-8 col-lg-5 col-xl-4 mx-auto d-flex flex-column  justify-content-center align-items-center">
					<img src="/assets/sg_elton_white-06.png" alt="Pa SG Elton" />
					<p className="text-light">Please, create your account.</p>
					<form className="w-100" action="/" method="post">
						<div class="form-group my-0">
							<label for="Email address"></label>
							<input
								type="email"
								name="email"
								id="email"
								class="form-control bg-transparent w-100 py-4 text-light"
								placeholder="Email address"
								required
							/>
							<i className="fa fa-envelope fa-lg"></i>
						</div>
						<div class="form-group my-0">
							<label for="Password"></label>
							<input
								type="password"
								name="password"
								id="password"
								class="form-control bg-transparent w-100 py-4 text-light"
								placeholder="Password"
								required
							/>
							<i className="fa fa-lock fa-lg"></i>
						</div>

						<button type="submit" className="bg-light text-pry w-100 btn py-3 mt-5 mb-0 text-uppercase">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
