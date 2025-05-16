
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
                    <label for="floatingInput" className="">Listing No</label>
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
                    <label for="floatingInput" className="">User Name</label>
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
                <div className="col-lg-6 w-50  p-2">
                    <h5>Selected Vendors</h5>
                    <div className="d-flex justify-content-between gap-4 flex-wrap">
                        <span class="badge text-bg-success">X7A4K9</span>
                        <span class="badge text-bg-success">Q2LM8T</span>
                        <span class="badge text-bg-success">N5WRZ1</span>
                        <span class="badge text-bg-success">K3UEV7</span>
                        <span class="badge text-bg-success">J9BQ2X</span>
                        <span class="badge text-bg-success">D6Y3MC</span>
                        <span class="badge text-bg-success">F1AZ8R</span>
                        <span class="badge text-bg-success">M7KC3J</span>
                        <span class="badge text-bg-success">R5VD9L</span>
                        <span class="badge text-bg-success">Z3NX7E</span>
                        <span class="badge text-bg-success">L2HP4B</span>
                        <span class="badge text-bg-success">T6Q9WY</span>
                        <span class="badge text-bg-success">W8J1CA</span>
                        <span class="badge text-bg-success">Y5T3PN</span>

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