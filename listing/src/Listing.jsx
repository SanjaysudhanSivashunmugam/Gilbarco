import logo from './assets/logo.svg'
export default function Listing() {
    return (
        <div class="container p-4">
            <form class="border p-4 rounded-3 shadow-sm">
                <h2 class="mb-4 text-primary">New Listing</h2>


                <div class="mb-3">
                    <label class="form-label">PART No.</label>
                    <input type="text" class="form-control" placeholder="Enter part number" />
                </div>


                <div class="mb-3">
                    <label class="form-label">PART DESCRIPTION</label>
                    <textarea class="form-control" rows="3" placeholder="Enter part description"></textarea>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6">
                        <label class="form-label">DRAW REVISION</label>
                        <input type="number" class="form-control" placeholder="Enter revision number" />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">UPLOAD DRAWING</label>
                        <input type="file" class="form-control" />
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-md-6">
                        <label class="form-label">ORDER TYPE</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                                <label class="form-check-label" for="radioDefault1">
                                     One Time
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2"  />
                                <label class="form-check-label" for="radioDefault2">
                                    Annual
                                </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">ANNUAL QUANTITY</label>
                        <input type="number" class="form-control" placeholder="Enter annual quantity" />
                    </div>
                </div>


                <div class="mb-3">
                    <label class="form-label">Auction Submission By Date:</label>
                    <input type="date" class="form-control" />
                </div>

                <div class="mb-4">
                    <label class="form-label">Supplier for Auction</label>
                    <select class="form-select" multiple>
                        <option>Select supplier</option>
                        <option>Supplier A</option>
                        <option>Supplier B</option>
                        <option>Supplier C</option>
                        <option>Supplier D</option>
                        <option>Supplier E</option>
                        <option>Supplier F</option>
                    </select>
                </div>


                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary btn-lg">
                        Submit For Auction
                    </button>
                </div>
            </form>
        </div>
    )
}