import React from 'react'

function ShareQuote() {
  return (
    <div>
      <div className="card mt-2 pt-2">
        <div className="card-text h6 px-4 b-2">Share Quotation</div>
        <div className="col bg-light rounded mx-3">
          <div className="card-body">
            <div className="card-text">Quotation</div>
          </div>
        </div>
        <div className="col text-center text-md-end p-4">
          <div className="btn btn-primary btn-sm">Submit and Share</div>
        </div>
      </div>
    </div>
  );
}

export default ShareQuote