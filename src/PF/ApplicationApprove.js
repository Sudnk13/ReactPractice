import React from 'react'

function ApplicationApprove() {
  return (
    <div>
        <div className="card px-4">
            <div className="card-body text-start">
                <div className="card-title h5 text-center">
                    Your Application Approved
                </div>
                <div className="row border p-3 my-4 rounded">
                    <div className="col">
                        <div className="card-text h6">Instructions for User -</div>
                        <div className="card-text">
                            Lorem ip sum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque enim elementum
                            pharetra in. Congue bibendum
                            diam sed elementum aliquet faucibus quis augue at.
                        </div>
                    </div>
                </div>
                <div className="card-text">Request Upload following Documents</div>
                <div className="row pb-2">
                    <div className="col-md-3">
                        <div className="card-text">1.Document Name</div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-text">2.Document Name</div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-text">3.Document Name</div>
                    </div>
                </div>
                <div className="row border rounded p-3">
                    <div className="col-md-5">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className="col-md-5">
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
                    <div className="col-md-2">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label"></label>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-circle-plus"></i>
                                <a href="" className="text-decoration-none">Add More</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col mt-2 text-end">
                    <div className="btn btn-primary bt-sm">Proceed and Complete Application</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApplicationApprove