import React from 'react'

function PremiumTracker() {
  return (
    <div>
        <div className="card-title h5 text-center py-2">
            Apply for Premium Finance
        </div>
        <div className="card">
            <div className="card-body justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Premium Tracker</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-between">
                                        <div className="card-text">Total Premium</div>
                                        <input type="text" className="form-control w-50" placeholder="Total premium"/>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col d-flex justify-content-between">
                                        <div className="card-text">Select EMI options</div>
                                        <div className="card-text">Total EMI Cost</div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-evenly">
                                        <div className="input-group border rounded align-items-center">
                                            <div className="input-group-text gap-2">
                                                <input className="form-check-input mt-0" type="radio" value=""
                                                    aria-label="Radio button for following text input"/>
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    3-EMI
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="range" className="form-range" min="0" max="2"
                                                    placeholder="range"/>
                                            </div>
                                            <span className="input-group-text">₹ 999999.99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-end">
                                        <div className="input-group border rounded align-items-center">
                                            <div className="input-group-text gap-2">
                                                <input className="form-check-input mt-0" type="radio" value=""
                                                    aria-label="Radio button for following text input"/>
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    4-EMI
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="range" className="form-range" min="0" max="3"
                                                    placeholder="range"/>
                                            </div>
                                            <span className="input-group-text">₹ 999999.99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-end">
                                        <div className="input-group border rounded align-items-center">
                                            <div className="input-group-text gap-2">
                                                <input className="form-check-input mt-0" type="radio" value=""
                                                    aria-label="Radio button for following text input"/>
                                                <label className="form-check-label" for="flexRadioDefault1">
                                                    6-EMI
                                                </label>
                                            </div>
                                            <div className="col">
                                                <input type="range" className="form-range" min="0" max="5"
                                                    placeholder="range"/>
                                            </div>
                                            <span className="input-group-text">₹ 999999.99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12 text-end">
                                        <div className="card-text h6"><i className="fa-solid fa-share-nodes pe-2"></i>Share this
                                            Plan
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 text-center py-2">
                        <div className="btn btn-primary">Proceed to Application</div>
                    </div>
                </div>
                <div className="col text-start p-5">
                    <div className="card-text h6">
                        Please keep Documents Ready for Upload ~ Company pan card
                        Directors pan card
                        6 month bank statement
                        Name of directors in the company
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PremiumTracker