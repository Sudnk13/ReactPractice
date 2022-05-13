import React from "react";
import Products from "../Components/Products";

function OnlineTendor() {
  return (
    <div>
      <div className="card my-3">
        <div className="card-header text-center h5">
          <div className="card-title">Get Instant Quote</div>
        </div>
        <div className="card-body">
          <p className="px-4">
            Instrtuctions : - Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam pellentesque ullamcorper cum sem. Mollis tempus
            sollicitudin senectus neque, vel sagittis, nisl, est.
          </p>

          <div className="row mb-5 gy-3">
            <div className="col-md-6 px-5">
              <label for="exampleFormControlInput1" className="form-label">
                What is your Business{" "}
                <span className="star">
                  <b>*</b>
                </span>
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <Products name="Product 1" />
          <Products name="Product 2" />
          <Products name="Product 3" />
          <Products name="Product 4" />
          <Products name="Product 5" />
          <Products name="Product 6" />

          <div className="row text-md-end text-center">
            <div className="col my-3">
              <div className="btn btn-primary btn-sm me-2">Submit</div>
              <div className="btn btn-primary btn-sm">Cancel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineTendor;
