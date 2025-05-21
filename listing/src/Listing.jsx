import React, { useState, useMemo } from 'react';
import logo from './assets/logo.svg';

export default function Listing() {
    // Generate 600+ sample vendors
    const generateVendors = () => {
        const vendors = [];
        const vendorNames = [
            "Global Parts", "Precision Tools", "Industrial Solutions", 
            "Metro Components", "Quality Materials", "Tech Fabricators",
            "Allied Distributors", "Prime Vendors", "ABC Suppliers", 
            "XYZ Manufacturing"
        ];
        
        for (let i = 1; i <= 600; i++) {
            const name = vendorNames[i % vendorNames.length];
            vendors.push(`${name} #${i.toString().padStart(3, '0')}`);
        }
        return vendors;
    };

    const allVendors = useMemo(() => generateVendors(), []);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [formData, setFormData] = useState({
        partNo: '',
        partDescription: '',
        drawRevision: '',
        orderType: 'oneTime',
        annualQuantity: '',
        submissionDate: ''
    });

    const filteredVendors = allVendors.filter(vendor =>
        vendor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (e) => {
        const options = e.target.options;
        const selected = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedVendors(selected);
    };

    const removeVendor = (vendorToRemove) => {
        setSelectedVendors(selectedVendors.filter(vendor => vendor !== vendorToRemove));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            ...formData,
            selectedVendors
        });
    };

    return (
        <div className="container p-4">
            <form className="border p-4 rounded-3 shadow-sm" onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-primary mb-0">New Listing</h2>
                    <img src={logo} alt="Company Logo" style={{ height: '40px' }} />
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">PART No.</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter part number" 
                            name="partNo"
                            value={formData.partNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">DRAW REVISION</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Enter revision number" 
                            name="drawRevision"
                            value={formData.drawRevision}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label fw-semibold">PART DESCRIPTION</label>
                    <textarea 
                        className="form-control" 
                        rows="3" 
                        placeholder="Enter part description"
                        name="partDescription"
                        value={formData.partDescription}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">UPLOAD DRAWING</label>
                        <div className="input-group">
                            <input type="file" className="form-control" />
                            <button className="btn btn-outline-secondary" type="button">
                                Upload
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">AUCTION SUBMISSION BY DATE</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="submissionDate"
                            value={formData.submissionDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">ORDER TYPE</label>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="orderType" 
                                id="oneTime" 
                                value="oneTime"
                                checked={formData.orderType === 'oneTime'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="oneTime">
                                One Time
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="orderType" 
                                id="annual" 
                                value="annual"
                                checked={formData.orderType === 'annual'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="annual">
                                Annual
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">ANNUAL QUANTITY</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Enter annual quantity" 
                            name="annualQuantity"
                            value={formData.annualQuantity}
                            onChange={handleChange}
                            disabled={formData.orderType !== 'annual'}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label fw-semibold">SUPPLIERS FOR AUCTION</label>
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search from 600+ vendors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-primary" type="button">
                            <i className="bi bi-search"></i> Search
                        </button>
                    </div>

                    <select
                        className="form-select"
                        multiple
                        size="8"
                        onChange={handleSelect}
                        value={selectedVendors}
                    >
                        {filteredVendors.map((vendor) => (
                            <option key={vendor} value={vendor}>
                                {vendor}
                            </option>
                        ))}
                    </select>
                    <small className="text-muted">Hold Ctrl/Cmd to select multiple vendors</small>

                    {selectedVendors.length > 0 && (
                        <div className="mt-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-2">SELECTED VENDORS ({selectedVendors.length})</h6>
                                <button 
                                    type="button" 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => setSelectedVendors([])}
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className="d-flex flex-wrap gap-2 mt-2">
                                {selectedVendors.map((vendor) => (
                                    <span
                                        key={vendor}
                                        className="badge bg-success d-flex align-items-center p-2"
                                    >
                                        {vendor}
                                        <button
                                            type="button"
                                            className="btn-close btn-close-white ms-2"
                                            aria-label="Remove"
                                            onClick={() => removeVendor(vendor)}
                                            style={{ fontSize: '0.5rem' }}
                                        ></button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="d-grid gap-2 mt-4">
                    <button type="submit" className="btn btn-primary btn-lg py-2">
                        <i className="bi bi-send-fill me-2"></i> SUBMIT FOR AUCTION
                    </button>
                </div>
            </form>
        </div>
    );
}