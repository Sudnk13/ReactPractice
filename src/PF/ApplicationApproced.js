import React from "react";

function ApplicationApproced() {
  return (
    <div>
      <div className="card px-4">
        <div className="card-body text-start">
          <div className="card-title h5 text-center">Your Application Approved</div>
          <div className="row border p-3 my-4 rounded">
            <div className="col d-flex justify-content-evenly h6">
              <div className="col-md-6">
                <div className="card-text">Quote Ref. Number :</div>
                <div className="card-text">Loan Approved :</div>
                <div className="card-text">Installment :</div>
              </div>
              <div className="col-md-6">
                <div className="card-text">Total Premium :</div>
                <div className="card-text">Down Payment :</div>
                <div className="card-text">Loan Account Details :</div>
              </div>
            </div>
          </div>

          <div className="row border p-3 my-4 rounded">
            <div className="col">
              <div className="col d-flex justify-content-end gap-2">
                <i className="fa-solid fa-file-pdf"></i>
                <i className="fa-solid fa-file-word"></i>
              </div>
              <div className="card-text h6">Loan Agreement :</div>
              <div className="card-text">
                Aadhar based document signing by all three agencies through
                Leegality or Docusign. In this each upon confirming gets link
                where he enters Aadhar number and then OTP to sign the document.
                After that process where insured pays the premium and enter
                transaction details and then NBFC pays the amount in loan
                account and confirms the details here. Both payment details are
                sent to all three parties
              </div>
            </div>
          </div>
          <div className="col text-end">
            <div className="btn btn-primary">Proceed and Complete Application</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationApproced;
