
export default function View() {
    const details = {
        listing_no: 1203,
        part_no: 3232,
        part_desc: "Casting Part",
        date: "15/05/2025",
        drawingRevision: 0,
        vendorName: "ABC pvt",
        email: "abc@gmail.com",
        phoneNo: "8290940293",
        period: "One Time",
        part_qty: 10,
        lead_time: 4,
        unit_rate: 100,
        material_cost: 30,
        process_cost: 30,
        overhead_cost: 25,
        packing_cost: 15,
        User: "Sanjay"
    }
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-4">Quotation Details</h1>
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
                    <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.part_desc} disabled />
                    <label for="floatingInput">Part Description</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.date} disabled />
                    <label for="floatingInput">Listed Date</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="number" class="form-control h-25" id="floatingInput" placeholder="" value={details.drawingRevision} disabled />
                    <label for="floatingInput" className="">Drawing Revision</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control h-25" id="floatingInput" placeholder="" value={details.User} disabled />
                    <label for="floatingInput" className="">Buyer Name</label>
                </div>

                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="number" class="form-control" id="floatingInput" placeholder="" value={details.phoneNo} disabled />
                    <label for="floatingInput">Phone No</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.email} disabled />
                    <label for="floatingInput" className="">Email address</label>
                </div>
            </form>
            <div className="row d-flex justify-content-center">
                <form action="" className="col-lg-6 px-0 row">
                    <div class="form-floating mb-3 ps-1">
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.period} disabled />
                        <label for="floatingInput" className="">Period</label>
                    </div>
                    <div class="form-floating mb-3 ps-1">
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.part_qty} disabled />
                        <label for="floatingInput" className="">Part Quantity</label>
                    </div>
                    <div class="form-floating mb-3 ps-1">
                        <input type="text" class="form-control " id="floatingInput" placeholder="" value={details.date} disabled />
                        <label for="floatingInput" className="">Submission Date</label>
                    </div>
                </form>
                <div className="col-lg-6 p-3">
                    <h5 className="mb-3 fw-bold">Selected Vendors</h5>
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex gap-2">
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>ABC Suppliers</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>XYZ Manufacturing</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Global Parts Inc.</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Precision Tools Co.</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Metro Components</span>
                        </div>
                        <div className="d-flex gap-2">
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Quality Materials Ltd.</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Industrial Solutions</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Tech Fabricators</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Allied Distributors</span>
                            <span className="badge text-bg-success p-2 flex-fill text-center" style={{ minWidth: '120px' }}>Prime Vendors Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-4 mb-4">
                <h3 className="fs-5">File Attachment</h3>
                <button type="button" class="btn btn-primary">Click Here</button>
            </div>
        </div>
    )
}