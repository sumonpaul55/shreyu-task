
import PageTitle from '../../../components/PageTitle'
import Accordion from 'react-bootstrap/Accordion';
import "./invoice.css"
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import Table from "../../../components/Table";
import invoiceData from "./invoice.json"



const Invoices = () => {



    // console.log(tableData)
    const columns = [
        {
            Header: "#",
            accessor: "id",
            sort: true,
        },
        {
            Header: "Barcode",
            accessor: "barcode",
            sort: true,
        },
        {
            Header: "Discount",
            accessor: "discount",
            sort: false,
        },
        {
            Header: "Total",
            accessor: "total",
            sort: true,
        },
        {
            Header: "Paid",
            accessor: "paid",
            sort: false,
        },
        {
            Header: "Due",
            accessor: "due",
            sort: false,
        },
        {
            Header: "Date",
            accessor: "date",
            sort: false,
        },
        {
            Header: "Status",
            accessor: "status",
            sort: false,
        },
        {
            Header: "Action",
            accessor: "action",
            sort: false,
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "jobtask", path: "/" },
                    { label: "invoices", path: "jobtask/invoices", active: true },
                ]}
                title={"Invoices"}
            />
            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='m-0'>Filter</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col sm={8} className='m-auto'>
                                <Row>
                                    <Col sm={4}>
                                        <div>
                                            <label htmlFor="" className='d-block mb-1'>Date</label>
                                            <Form.Select aria-label="Default select example" className='p-1'>
                                                <option>Today</option>
                                                <option value="yesterday">Yesterday</option>
                                                <option value="last 7 days">Last 7 days</option>
                                                <option value="last 30 days">Last 30 Days</option>
                                            </Form.Select>
                                        </div>

                                    </Col>
                                    <Col sm={4}>
                                        <div>
                                            <label htmlFor="" className='d-block mb-1'>Status</label>
                                            <Form.Select aria-label="Default select example" className='p-1'>
                                                <option value="all">All</option>
                                                <option value="done">Done</option>
                                                <option value="pending">Pending</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div>
                                            <label htmlFor="" className='d-block mb-1'>Status</label>
                                            <input type="text" placeholder='Barcode' className='w-100 border-1 rounded p-1' style={{ fontSize: "12px" }} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Row className='mt-2'>
                <Col>

                    <Row>
                        <Col sm={4}>
                            <div className='d-flex gap-1'>
                                <label htmlFor="">Show</label>
                                <select aria-label="Default select example" className='border-1'>
                                    <option>10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                                Record
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='d-flex'>
                                <div className='px-1 text-white py-1 cursor-pointer' style={{ background: "#5369f8", borderRight: "1px solid", fontSize: "12px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                    <span>Copy</span>
                                </div>
                                <div className='px-1 text-white py-1 cursor-pointer' style={{ background: "#5369f8", borderRight: "1px solid", fontSize: "12px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-exe" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575zM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z" />
                                    </svg>
                                    <span>Exel</span>
                                </div>
                                <div className='px-1 text-white py-1 cursor-pointer' style={{ background: "#5369f8", borderRight: "1px solid", fontSize: "12px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark" viewBox="0 0 16 16">
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                                    </svg>
                                    <span>CVS</span>
                                </div>
                                <div className='px-1 text-white py-1 cursor-pointer' style={{ background: "#5369f8", borderRight: "1px solid", fontSize: "12px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-pdf" viewBox="0 0 16 16">
                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
                                    </svg>
                                    <span>PDF</span>
                                </div>
                                <div className='px-1 text-white py-1 cursor-pointer' style={{ background: "#5369f8", borderRight: "1px solid", fontSize: "12px" }}>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className='p-0'>

                                            <span style={{}}> <i className="bi bi-eye-fill"></i></span>
                                            <span style={{ marginLeft: "-3px" }}> <i className="bi bi-caret-down-fill"></i></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">#</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Bardcode</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Client Code</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Client Name</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Subtotal</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Discount</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} className='text-end'>
                            <label className='m-1 block' htmlFor="">Search</label>
                            <input type="text" placeholder='Search' className='rounded border-1' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table
                                columns={columns}
                                data={invoiceData}
                                pageSize={6}
                                // sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                            />

                        </Col>
                    </Row>

                </Col>
            </Row>
        </>
    )
}

export default Invoices