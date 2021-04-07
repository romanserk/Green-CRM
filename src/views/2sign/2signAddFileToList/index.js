import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./AddFileToList.scss";
// import {Document, Page } from 'react-pdf';

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
  CRow,
  CInputFile,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const initialForm = {
  fileName: "",
  XPossition: "",
  YPossition: "",
  width: "",
  height: "",
};

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AddFileToList2sign = () => {
  const [form, setForm] = useState(initialForm);
  const [validated, setValidated] = useState(false);

  // PDF Preview
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  let signaturePossitionStyle = {
    display: `${form.width + form.height > 0 ? "block" : "none"}`,
    zIndex: "500",
    position: "absolute",
    left: `${form.XPossition}px`,
    top: `${form.YPossition}px`,
    width: `${form.width}px`,
    height: `${form.height}px`,
    border: "solid 4px blue",
  };

  // end PDF Preview

  const handleFormChange = (e) => {
    console.log(form);
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
          <CRow>
            <CCol md="7">
              <div style={{ position: "relative" }}>
                <div style={signaturePossitionStyle}></div>
                <Document
                  file={file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  options={options}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
            </CCol>
            <CCol md="5">
              <CCol md="12" className="p-0 pb-4">
                <CInputFile
                  custom
                  id="custom-file-input"
                  onChange={onFileChange}
                />
                <CLabel htmlFor="custom-file-input" variant="custom-file">
                  Choose file...
                </CLabel>
                <CFormText className="help-block">
                  Please coose file to upload
                </CFormText>
              </CCol>
              <CFormGroup row>
                <CCol md="12">
                  <CFormGroup>
                    <CLabel htmlFor="first-name">File Name</CLabel>
                    <CInput
                      id="file-name"
                      name="fileName"
                      value={form.fileName}
                      onChange={handleFormChange}
                      placeholder="Enter file name"
                      required
                    />
                    <CFormText className="help-block">
                      Please enter file name
                    </CFormText>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="last-name">X Possition</CLabel>
                    <CInput
                      type="number"
                      id="XPossition-input"
                      name="XPossition"
                      value={form.XPossition}
                      onChange={handleFormChange}
                      placeholder="Enter X Possition"
                      required
                    />
                    <CFormText className="help-block">
                      Please enter your signature top left corner X possition
                    </CFormText>
                  </CFormGroup>
                </CCol>
                <CCol md="6">
                  <CLabel htmlFor="email-input">Y Possition</CLabel>
                  <CInput
                    type="number"
                    id="YPossition-input"
                    value={form.YPossition}
                    onChange={handleFormChange}
                    name="YPossition"
                    placeholder="Enter Y Possition"
                    required
                  />
                  <CFormText className="help-block">
                    Please enter your signature top left corner Y possition
                  </CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="6">
                  <CFormGroup>
                    <CLabel htmlFor="last-name">Width</CLabel>
                    <CInput
                      type="number"
                      id="Width-input"
                      name="width"
                      value={form.width}
                      onChange={handleFormChange}
                      placeholder="Enter width"
                      required
                    />
                    <CFormText className="help-block">
                      Please enter your signature Width
                    </CFormText>
                  </CFormGroup>
                </CCol>
                <CCol md="6">
                  <CLabel htmlFor="email-input">Height</CLabel>
                  <CInput
                    type="number"
                    id="height-input"
                    value={form.height}
                    onChange={handleFormChange}
                    name="height"
                    placeholder="Enter Height"
                    required
                  />
                  <CFormText className="help-block">
                    Please enter your signature Height
                  </CFormText>
                </CCol>
              </CFormGroup>
            </CCol>
          </CRow>
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

export default AddFileToList2sign;
