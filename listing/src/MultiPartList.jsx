import React, { useState, useMemo } from 'react';
import logo from './assets/logo.svg';
import * as XLSX from 'xlsx';


export default function MultiPartList() {
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
    const [parts, setParts] = useState([]);
    const [activeTab, setActiveTab] = useState('excel');
    const [currentPart, setCurrentPart] = useState({
        partNo: '',
        partDescription: '',
        drawRevision: '',
        orderType: 'oneTime',
        partQuantity: '',
        submissionDate: '',
    });
    const [listingSubmissionDate, setListingSubmissionDate] = useState('');
    const [drawingFile, setDrawingFile] = useState(null);

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
        // Special handling for drawRevision to ensure it's numeric
        if (name === 'drawRevision') {
            // Only allow numbers or empty string
            if (value === '' || /^[0-9\b]+$/.test(value)) {
                setCurrentPart(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setCurrentPart(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleListingDateChange = (e) => {
        setListingSubmissionDate(e.target.value);
    };

    const handleFileChange = (e) => {
        setDrawingFile(e.target.files[0]);
    };

    const addPart = () => {
        if (!currentPart.partNo) {
            alert('Part number is required');
            return;
        }

        // Use the listing submission date for all parts
        const partToAdd = {
            ...currentPart,
            submissionDate: listingSubmissionDate
        };

        setParts([...parts, partToAdd]);
        setCurrentPart({
            partNo: '',
            partDescription: '',
            drawRevision: '',
            orderType: 'oneTime',
            partQuantity: '',
            submissionDate: listingSubmissionDate,
        });
    };

    const removePart = (index) => {
        const updatedParts = [...parts];
        updatedParts.splice(index, 1);
        setParts(updatedParts);
    };

    const handleExcelUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);

            const importedParts = jsonData.map(item => ({
                partNo: item['Part No'] || item['Part No.'] || '',
                partDescription: item['Description'] || item['Part Description'] || '',
                drawRevision: item['Revision'] || item['Draw Revision'] || '',
                orderType: (item['Order Type'] || '').toLowerCase() === 'annual' ? 'annual' : 'oneTime',
                partQuantity: item['Quantity'] || item['Part Quantity'] || '',
                submissionDate: listingSubmissionDate || item['Date'] || item['Submission Date'] || '',
            }));

            setParts(importedParts);
        };

        reader.readAsArrayBuffer(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (parts.length === 0) {
            alert('Please add at least one part');
            return;
        }

        if (selectedVendors.length === 0) {
            alert('Please select at least one vendor');
            return;
        }

        if (!listingSubmissionDate) {
            alert('Please enter a submission date for the listing');
            return;
        }

        // Handle form submission
        console.log({
            parts,
            selectedVendors,
            submissionDate: listingSubmissionDate,
            drawingFile: drawingFile ? drawingFile.name : 'No drawing attached'
        });
    };
    return (
        <div className="container p-4">
            <form className="border p-4 rounded-3 shadow-sm bg-light" onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-primary mb-0">New Listing</h2>
                    <img src={logo} alt="Company Logo" style={{ height: '40px' }} />
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">AUCTION SUBMISSION BY DATE</label>
                        <input
                            type="date"
                            className="form-control"
                            name="listingSubmissionDate"
                            value={listingSubmissionDate}
                            onChange={handleListingDateChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label fw-semibold">UPLOAD DRAWING (COMMON FOR ALL PARTS)</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleFileChange}
                    />
                    {drawingFile && (
                        <div className="mt-2">
                            <span className="badge bg-info text-dark">
                                {drawingFile.name}
                                <button
                                    type="button"
                                    className="btn-close btn-close-white ms-2"
                                    aria-label="Remove"
                                    onClick={() => setDrawingFile(null)}
                                    style={{ fontSize: '0.5rem' }}
                                ></button>
                            </span>
                        </div>
                    )}
                </div>

                <ul className="nav nav-tabs mb-4">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'excel' ? 'active' : ''}`}
                            onClick={() => setActiveTab('excel')}
                        >
                            Excel Upload
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'manual' ? 'active' : ''}`}
                            onClick={() => setActiveTab('manual')}
                        >
                            Manual Entry
                        </button>
                    </li>
                </ul>

                {activeTab === 'manual' ? (
                    <div className="mb-4">
                        <div className="row mb-4">
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">PART No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter part number"
                                    name="partNo"
                                    value={currentPart.partNo}
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
                                    value={currentPart.drawRevision}
                                    onChange={handleChange}
                                    min="0"
                                    step="1"
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
                                value={currentPart.partDescription}
                                onChange={handleChange}
                            ></textarea>
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
                                        checked={currentPart.orderType === 'oneTime'}
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
                                        checked={currentPart.orderType === 'annual'}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="annual">
                                        Annual
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">PART QUANTITY</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter quantity"
                                    name="partQuantity"
                                    value={currentPart.partQuantity}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary mb-4"
                            onClick={addPart}
                        >
                            Add Part
                        </button>
                    </div>
                ) : (
                    <div className="mb-4">
                        <div className="mb-3">
                            <label className="form-label fw-semibold">UPLOAD EXCEL FILE</label>
                            <input
                                type="file"
                                className="form-control"
                                accept=".xlsx, .xls, .csv"
                                onChange={handleExcelUpload}
                            />
                            <small className="text-muted">
                                Excel should contain columns: Part No, Description, Revision, Order Type, Quantity
                            </small>
                        </div>
                    </div>
                )}

                {parts.length > 0 && (
                    <div className="mb-4">
                        <h5 className="mb-3">Parts to Submit ({parts.length})</h5>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead className="table-light">
                                    <tr>
                                        <th>Part No</th>
                                        <th>Description</th>
                                        <th>Revision</th>
                                        <th>Order Type</th>
                                        <th>Quantity</th>
                                        <th>Submission Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {parts.map((part, index) => (
                                        <tr key={index}>
                                            <td>{part.partNo}</td>
                                            <td>{part.partDescription}</td>
                                            <td>{part.drawRevision}</td>
                                            <td>{part.orderType}</td>
                                            <td>{part.partQuantity}</td>
                                            <td>{part.submissionDate || 'Not specified'}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => removePart(index)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                <div className="mb-4">
                    <label className="form-label fw-semibold">SUPPLIERS FOR AUCTION</label>
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search vendors..."
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
    )
} 