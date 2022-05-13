import React from 'react'

function OnlineTendor1() {
  return (
    <div>
        <div className="card mt-2 pt-2">
            <div className="card-text h6 px-4 b-2">Choose Product (20)</div>
            <div className="col shadow rounded mx-3">
                <div className="card-body">
                    <div className="col d-flex justify-content-end p-2 gap-2 align-items-center">
                        <label for="exampleDataList" className="form-label">Search Product :</label>
                        <input className="rounded" type="search" list="datalistOptions" id="exampleDataList"
                            placeholder="Type to search..."/>
                        <datalist id="datalistOptions">
                            <option value="One"/>
                            <option value="Two"/>
                            <option value="Three"/>
                        </datalist>
                    </div>
                    <div className="row mt-2 bg-light">
                        <div className="col-12 p-1 d-flex" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample">
                            <div className="form-check mx-2">
                                <input className="form-check-input me-4" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" for="flexCheckDefault">
                                    <div className="card-text h6">Product Name</div>
                                    <div className="card-text">Some brief about this Product</div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row collapse justify-content-evenly align-items-center p-1" id="collapseExample">
                        <div className="col-md-2">
                            <div className="card-text">Some details</div>
                        </div>
                        <div className="col-md-3 d-flex p-2 gap-2">
                            <label for="exampleFormControlInput1" className="form-label">Enter Value</label>
                            <div className="col d-flex">
                                <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="₹"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-text">Coverage offer</div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-text">Some text</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-text px-4 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti tellus
                interdum venenatis suscipit in auctor malesuada.
                Nibh facilisi eget placerat eu habitasse aliquam. Vulputate ac, nulla nunc, arcu massa augue sit
                ipsum. Nunc, tellus
                risus enim donec. Tellus orci morbi vitae amet faucibus volutpat mauris felis. Sollicitudin sit
                in</div>
            <div className="col text-center text-md-end p-4">
                <div className="btn btn-primary btn-sm">Confirm and Proceed</div>
            </div>
        </div>
    </div>
  )
}

export default OnlineTendor1