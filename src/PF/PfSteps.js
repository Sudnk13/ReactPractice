import React from 'react'

function PfSteps() {
  return (
    <div>
        <div className="accordion" id="accordionExample">
            <div className="steps">
                <progress id="progress" value={0} max={100}></progress>
                <div className="step-item">
                    <button className="step-button text-center" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Step One
                    </button>
                    <div className="step-title">
                        Enter Your Details
                    </div>
                </div>
                <div className="step-item">
                    <button className="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Step Two
                    </button>
                    <div className="step-title">
                        Upload Documents
                    </div>
                </div>
                <div className="step-item">
                    <button className="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Step Three
                    </button>
                    <div className="step-title">
                        Submit your application
                    </div>
                </div>
            </div>

            <div className="card p-3">
                <div id="headingOne">
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="card-body">
                        <div className="card-text p-1 bg-light rounded">
                            Placeholder for Success / Error message
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Name of Company</label>
                                    <input type="text" className="form-control" placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Address</label>
                                    <textarea className="form-control" rows="1"></textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="text" className="form-control" placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="text" className="form-control" placeholder="name@example.com"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-end">
                                <div className="btn btn-secondary btn-sm">Cancel</div>
                                <div className="btn btn-primary btn-sm">Next</div>
                            </div>
                        </div>
                        <div className="card-text py-3">
                            <div className="card-text h6">Instructions for User -</div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque enim elementum
                            pharetra in. Congue bibendum
                            diam sed elementum aliquet faucibus quis augue at.
                        </div>
                    </div>
                </div>
            </div>

            <div className="card p-3">
                <div id="headingTwo">

                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="card-body">
                        <div className="card-text p-1 bg-light rounded">
                            Placeholder for Success / Error message
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Company Pan Card</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's username"
                                            aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon2">Browse</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Directors Pan Card</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's username"
                                            aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon2">Browse</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">6 Months Bank
                                        statement</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's username"
                                            aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon2">Browse</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Name of Directors in
                                        Company</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's username"
                                            aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon2">Browse</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col text-end">
                                <div className="btn btn-info btn-sm">Back</div>
                                <div className="btn btn-primary btn-sm">Next</div>
                            </div>
                        </div>
                        <div className="card-text py-3">
                            <div className="card-text h6">Instructions for User -</div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque enim elementum
                            pharetra in. Congue bibendum
                            diam sed elementum aliquet faucibus quis augue at.
                        </div>
                    </div>
                </div>
            </div>

            <div className="card p-3">
                <div id="headingThree">

                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="card-body">
                        <div className="row">
                            <div className="card-text h6 py-3">Please Review Information Before Submit</div>
                            <div className="col-md-12">
                                <div className="card-text h6">Name Of Company : Name of Company goes here</div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text h6 pb-3">Address : 80, B, Shreyas Indl Estate, Off Link Rd, Nr
                                    Monginis,
                                    Andheri(w) Mumbai, Maharashtra 400053</div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text h6 pb-3">GST : 09AXXCH7409R1ZZ</div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text h6 pb-3" h6 pb-3>CIN : L21091XX2019OPC141451</div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text h6 pb-3">Company Pancard : company_pancard.jpg</div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text h6 pb-3">Directos Pancard : directors_pamcard.jpg</div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text h6 pb-3">Bank Statement: HDFC071220012.CSV</div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text h6 pb-3">Name of Directors : directors_names.jpg</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-end">
                            <div className="btn btn-warning btn-sm">Back</div>
                            <div className="btn btn-primary btn-sm">Next</div>
                        </div>
                    </div>
                    <div className="card-text py-3">
                        <div className="card-text h6">Instructions for User -</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque enim elementum
                        pharetra in. Congue bibendum
                        diam sed elementum aliquet faucibus quis augue at.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PfSteps