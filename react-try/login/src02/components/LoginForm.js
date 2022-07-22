import React from "react";

export default function LoginForm() {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <form name="form1">
                        <div className="mb-3">
                            <label htmlFor="account" className="form-label">
                                Account
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="account"
                                name="account"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
