import React from 'react'

function ApplyPf() {
  return (
    <div>
         <div className="container">

        <div className="card-title mt-2 text-center h4 py-2">
            Apply for Premium Finance
        </div>
        <div className="card my-2 px-4 text-center">
            <div className="card-text py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae libero diam at
                lobortis arcu. Dolor, faucibus Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vitae libero diam at lobortis arcu. Dolor, faucibus
            </div>
            <div className="card-text d-flex justify-content-end py-2">
                <span className="text-danger pe-1"><b>*</b></span>
                Madatory Fields
            </div>
            <div className="card-text d-flex text-start py-2">
                Who are you
                <span className="text-danger d-flex ps-1"><b>*</b></span>
            </div>
            <div className="col d-flex gap-3 py-2">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" placeholder="radio1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Individual
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" for="flexRadioDefault2">
                        Company
                    </label>
                </div>
            </div>
            <div className="row px-2">
                <div className="col-md-6">
                    <div className="card p-3 mb-3">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Name<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Surname<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="text" className="form-control" placeholder="Surname" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Address<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <textarea className="form-control" rows="1" placeholder="Enter your Address"></textarea>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Phone No<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="text" className="form-control" placeholder="+91" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Date of Birth<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="date" className="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Email ID<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="email" className="form-control" placeholder="name@example.com" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card p-3 mb-3">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Company Name<span
                                        className="text-danger ps-1"><b>*</b></span>
                                </label>
                                <input type="text" className="form-control" placeholder="Company Name" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">CIN<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="text" className="form-control" placeholder="L21091KA2019OPC141331" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">GST<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="text" className="form-control" placeholder="27AABCU9603R1ZN" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Phone No<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="text" className="form-control" placeholder="+91" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-flex flex-row">Email ID<span
                                        className="text-danger ps-1"><b>*</b></span></label>
                                <input type="email" className="form-control" placeholder="name@example.com" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col text-end">
                        <button className="btn-primary btn-sm">Proceed to Application</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ApplyPf