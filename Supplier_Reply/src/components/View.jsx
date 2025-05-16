
export default function View() {
    const details = {
        listing_no: 1203,
        part_no: 3232,
        part_desc: "Casting Part",
        date: "15/05/2025",
        status: "Submitted",
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
        packing_cost: 15
    }
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-4">Supplier Offer</h1>
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
                    <input type="email" class="form-control" id="floatingInput" placeholder="" value={details.date} disabled />
                    <label for="floatingInput">Date</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control h-25" id="floatingInput" placeholder="" value={details.status} disabled />
                    <label for="floatingInput" className="">Status</label>
                </div>
                <div class="form-floating mb-3 col-lg-3 col-md-6 ps-1">
                    <input type="text" class="form-control" id="floatingInput" placeholder="" value={details.vendorName} disabled />
                    <label for="floatingInput">Vendor Name</label>
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
            <div className="row d-flex justify-content-evenly gap-3">
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
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.lead_time} disabled />
                        <label for="floatingInput" className="">Lead Time Days</label>
                    </div>
                    <div class="form-floating mb-3 ps-1">
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.unit_rate} disabled />
                        <label for="floatingInput" className="">Unit Rate</label>
                    </div>
                </form>
                <form action="" className="col-lg-6 px-0 row">
                    <div class="form-floating mb-3 ps-1">
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.material_cost} disabled />
                        <label for="floatingInput" className="">Material Cost</label>
                    </div>
                    <div class="form-floating mb-3 ps-1">
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.process_cost} disabled />
                        <label for="floatingInput" className="">Process Cost</label>
                    </div>
                    <div class="form-floating mb-3 ps-1">
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.overhead_cost} disabled />
                        <label for="floatingInput" className="">Overhead Margin</label>
                    </div>
                    <div class="form-floating mb-3 ps-1">
                        <input type="email" class="form-control " id="floatingInput" placeholder="" value={details.packing_cost} disabled />
                        <label for="floatingInput" className="">Packing and Forwarding</label>
                    </div>
                </form>
            </div>
            <div className="row mb-3">
                <div className="col-lg-12">
                    <h1 className="text-center fs-4 mb-3">General Terms</h1>
                    <form action="" className=" px-0 row">
                        <div class="form-floating mb-3 ps-1">
                            <input type="email" class="form-control " id="floatingInput" placeholder=""  disabled />
                            <label for="floatingInput" className="">Payment Terms</label>
                        </div>
                        <div class="form-floating mb-3 ps-1">
                            <input type="email" class="form-control " id="floatingInput" placeholder=""  disabled />
                            <label for="floatingInput" className="">Delivery Terms</label>
                        </div>
                        <div class="form-floating mb-3 ps-1">
                            <input type="email" class="form-control " id="floatingInput" placeholder=""  disabled />
                            <label for="floatingInput" className="">Freight Terms</label>
                        </div>
                        <div class="form-floating mb-3 ps-1">
                            <textarea type="email" class="form-control " style={{height:"130px"}} id="floatingInput" placeholder=""  disabled />
                            <label for="floatingInput" className="">Remarks</label>
                        </div>  
                        
                    </form>
                </div>
            </div>
            <div className="d-flex gap-4 mb-4">
                <h3>File Attachment</h3>
                <button type="button" class="btn btn-primary">Click Here</button>
            </div>
        </div>
    )
}