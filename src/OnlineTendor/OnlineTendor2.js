import React from 'react'

function OnlineTendor2() {
  return (
    <div>
        <div className="card p-2 my-3">
            <div className="table-responsive">
                <table className="table table-hover border">
                    <thead>
                        <tr>
                            <th>Insurer</th>
                            <th>Yes/No</th>
                            <th>Enter email (if you want specific person else leave blank)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NIA</td>   
                            <td>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                </div>
                            </td>
                            <td>
                                <input type="email" className="form-control form-control-sm w-50 rounded" id="exampleFormControlInput1" placeholder=""/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="card-text px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti tellus interdum
                venenatis suscipit in auctor malesuada.
                Nibh facilisi eget placerat eu habitasse aliquam. Vulputate ac, nulla nunc, arcu massa augue sit ipsum.
                Nunc, tellus
                risus enim donec. Tellus orci morbi vitae amet faucibus volutpat mauris felis. Sollicitudin sit in</div>
            <div className="row m-2">
                <div className="col text-md-end text-center">
                    <button className="btn-primary btn-sm">Confirm and Proceed</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnlineTendor2