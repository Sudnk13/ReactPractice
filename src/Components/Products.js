import React from "react";

function Products(props) {
  return (
    <div>
      <div className="col-12 p-2 d-flex bg-light mb-1">
        <div className="form-check">
          <input
            className="form-check-input me-4"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            <div className="card-text h6">{props.name}</div>
            <div className="card-text">Some brief about this Product</div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Products;
