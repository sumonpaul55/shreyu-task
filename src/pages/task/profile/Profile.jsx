import React, { useState } from 'react'
import PageTitle from '../../../components/PageTitle'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const Profile = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "jobtask", path: "/" },
                    { label: "Profile", path: "jobtask/profile", active: true },
                ]}
                title={"Edit Profile"}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            {/* <h5 className="mt-0 header-title">Profile</h5> */}
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="simpleinput">
                                        Name
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            required
                                            type="text"
                                            id="name"
                                            defaultValue="Name"
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            Please enter a name.
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="simpleinput">
                                        Email
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            required
                                            type="email"
                                            id="email"
                                            defaultValue="email"
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            Enter a valid email please
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="simpleinput">
                                        Password
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            required
                                            type="password"
                                            id="password"
                                            defaultValue="password"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="simpleinput">
                                        Confirmation Password
                                    </Form.Label>
                                    <Col lg={10}>
                                        <Form.Control
                                            required
                                            type="password"
                                            id="password"
                                            defaultValue="password"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column lg={2} htmlFor="example-fileinput">
                                        Signature
                                    </Form.Label>
                                    <Col lg={8}>
                                        <Form.Control required type="file" id="example-fileinput" />
                                    </Col>
                                    <Col lg={2} className=''>
                                        <div className='bg-primary py-1 mb-1 rounded text-white text-center'>
                                            <p className='m-0'>Signature</p>
                                        </div>
                                        <div className='border' style={{ height: "200px" }}>
                                            <img src="" alt="signature Img" />
                                        </div>
                                    </Col>
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Profile