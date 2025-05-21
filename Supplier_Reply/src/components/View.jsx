
export default function View() {
    const details = {
        listing_no: 1203,
        part_no: 3232,
        part_desc: "Casting Part",
        date: "15/05/2025",
        status: "Submitted",
        vendorName: "ABC pvt",
        email: "abc@gmail.com",
        code: "AV772",
        period: "One Time",
        part_qty: 10,
        lead_time: 4,
        unit_rate: 100,
        material_cost: 30,
        process_cost: 30,
        overhead_cost: 25,
        packing_cost: 15
    }
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-4">Supplier Offer</h1>
            <form action="" className="row d-flex">
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control h-25" id="floatingInput" placeholder="Listing No" value={details.listing_no} disabled />
                    <label for="floatingInput" className="">Quotation No</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.part_no} disabled />
                    <label for="floatingInput">Part No</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control h-25" id="floatingInput" placeholder="" value={details.code} disabled />
                    <label for="floatingInput" className="">Vendor Code</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="email" class="form-control" id="floatingInput" placeholder="" value={details.date} disabled />
                    <label for="floatingInput">Date</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control h-25" id="floatingInput" placeholder="" value={details.status} disabled />
                    <label for="floatingInput" className="">Status</label>
                </div>

                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.part_desc} disabled />
                    <label for="floatingInput">Part Description</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.vendorName} disabled />
                    <label for="floatingInput">Vendor Name</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.email} disabled />
                    <label for="floatingInput" className="">Email address</label>
                </div>
            </form>
            <div className="row border p-4 rounded-3 bg-light">
                <div className="col-lg-6 pe-lg-4">
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="period" className="form-label fw-semibold">Period:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="period" className="form-control bg-white" disabled />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="partQuantity" className="form-label fw-semibold">Part Quantity:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="partQuantity" className="form-control bg-white" disabled />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="status" className="form-label fw-semibold">Sample Lead Time:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="status" className="form-control bg-white" disabled />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="createdDate" className="form-label fw-semibold">Production Lead Time:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="createdDate" className="form-control bg-white" disabled />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 ps-lg-4 border-start">
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="totalCost" className="form-label fw-semibold">Material Cost:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="totalCost" className="form-control bg-white" disabled />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="completedParts" className="form-label fw-semibold">Process Cost:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="completedParts" className="form-control bg-white" disabled />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="operator" className="form-label fw-semibold">Overhead Margin:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="operator" className="form-control bg-white" disabled />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-sm-5">
                            <label htmlFor="lastUpdated" className="form-label fw-semibold">Packing & Forwarding:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="lastUpdated" className="form-control bg-white" disabled />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <label htmlFor="additionalField" className="form-label fw-semibold">Unit Rate:</label>
                        </div>
                        <div className="col-sm-7">
                            <input type="text" id="additionalField" className="form-control bg-white" disabled />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-lg-6">
                    <h1 className="text-center fs-4 mb-3">General Terms</h1>
                    <form action="" className=" px-0 row">
                        <div class="form-floating mb-3 ps-1 col-lg-6">
                            <input type="email" class="form-control " id="floatingInput" placeholder="" disabled />
                            <label for="floatingInput" className="">MSME / Not MSME</label>
                        </div>
                        <div class="form-floating mb-3 ps-1 col-lg-6">
                            <input type="email" class="form-control " id="floatingInput" placeholder="" disabled />
                            <label for="floatingInput" className="">Payment Terms</label>
                        </div>
                        <div class="form-floating mb-3 ps-1 col-lg-6">
                            <input type="email" class="form-control " id="floatingInput" placeholder="" disabled />
                            <label for="floatingInput" className="">Delivery Terms</label>
                        </div>
                        <div class="form-floating mb-3 ps-1 col-lg-6">
                            <input type="email" class="form-control " id="floatingInput" placeholder="" disabled />
                            <label for="floatingInput" className="">Freight Terms</label>
                        </div>
                        <div class="form-floating mb-3 ps-1 col-lg-6">
                            <textarea type="email" class="form-control " style={{ height: "130px" }} id="floatingInput" placeholder="" disabled />
                            <label for="floatingInput" className="">Remarks</label>
                        </div>

                    </form>
                </div>
                <div className="col-lg-6">
                    <div className="row align-items-center my-4">
                        <div className="col-md-3 d-flex justify-content-center">
                            <label htmlFor="toolingCost" className="form-label fw-semibold">Tooling Cost: Rs</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" id="toolingCost" className="form-control bg-white" disabled value="1,00,000" />
                        </div>
                        <div className="col-md-3 d-flex justify-content-center">
                            <label htmlFor="shotCount" className="form-label fw-semibold">No. of shots</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" id="shotCount" className="form-control bg-white" disabled value="3,00,000" />
                        </div>
                    </div>

                    <div className="border p-3 mb-4 rounded">
                        <h5 className="mb-3">Attachments</h5>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Breakup Attachment
                                    </label>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">
                                            <i className="bi bi-file-earmark-pdf-fill text-danger fs-5"></i>
                                        </span>
                                        <a href="/path/to/breakup.pdf"
                                            className="text-decoration-none btn btn-primary"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            breakup_details.pdf
                                        </a>
                                        <span className="ms-2 text-muted">(2.4 MB)</span>
                                    </div>
                                    <div className="form-text">Uploaded breakup details document</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Drawing
                                    </label>
                                    <div className="d-flex align-items-center">
                                        <span className="me-2">
                                            <i className="bi bi-file-earmark-image-fill text-primary fs-5"></i>
                                        </span>
                                        <a href="/path/to/drawing.dwg"
                                            className="text-decoration-none btn btn-primary"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            product_drawing.dwg
                                        </a>
                                        <span className="ms-2 text-muted">(5.1 MB)</span>
                                    </div>
                                    <div className="form-text">Uploaded drawing file</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}