import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CButton,
  CCardFooter,
  CFormText,
  CForm,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const initialForm = {
  firstName: "",
  lastName: "",
  mobileInput: "",
  emailInput: "",
};

const AddNewCustomer = () => {
  const [form, setForm] = useState(initialForm);
  const [validated, setValidated] = useState(false);

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
  };

  const resetHandler = () => setForm(initialForm);

  return (
    <CForm onSubmit={handleFormSubmit} wasValidated={false}>
      <CCard>
        <CCardHeader>
          Add New Customer
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CFormGroup row>
            <CCol md="6">
              <CFormGroup>
                <CLabel htmlFor="first-name">First Name</CLabel>
                <CInput
                  id="first-name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleFormChange}
                  placeholder="Enter your first name"
                  required
                />
                <CFormText className="help-block">
                  Please enter your first name
                </CFormText>
              </CFormGroup>
            </CCol>
            <CCol md="6">
              <CFormGroup>
                <CLabel htmlFor="last-name">Last Name</CLabel>
                <CInput
                  id="last-name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleFormChange}
                  placeholder="Enter your last name"
                  required
                />
                <CFormText className="help-block">
                  Please enter your last name
                </CFormText>
              </CFormGroup>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="6">
              <CLabel htmlFor="email-input">Mobile Number</CLabel>
              <CInput
                type="phone"
                id="mobile-input"
                value={form.mobileInput}
                onChange={handleFormChange}
                name="mobileInput"
                placeholder="Enter Mobile Number"
                autoComplete="phone"
                required
              />
              <CFormText className="help-block">
                Please enter your mobile number
              </CFormText>
            </CCol>
            <CCol md="6">
              <CFormGroup>
                <CLabel htmlFor="email-input">Email Input</CLabel>
                <CInput
                  type="email"
                  id="email-input"
                  name="emailInput"
                  value={form.emailInput}
                  onChange={handleFormChange}
                  placeholder="Enter Email"
                  autoComplete="email"
                  required
                />
                <CFormText className="help-block">
                  Please enter your email
                </CFormText>
              </CFormGroup>
            </CCol>
          </CFormGroup>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary">
            <CIcon name="cil-scrubber" /> Submit
          </CButton>
          <CButton
            type="reset"
            size="sm"
            color="danger"
            className="ml-3"
            onClick={resetHandler}
          >
            <CIcon name="cil-ban" /> Reset
          </CButton>
        </CCardFooter>
      </CCard>
    </CForm>
  );
};

export default AddNewCustomer;
