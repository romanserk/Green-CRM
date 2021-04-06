import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CCardFooter,
  CFormText,
  CForm,
  CInputFile,
  CDataTable,
  CBadge,
  CInputCheckbox,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

const usersData = [
  {
    id: 0,
    UserName: "John Doe",
    role: "Guest",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 1,
    UserName: "Samppa Nori",
    role: "Member",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 2,
    UserName: "Estavan Lykos",
    role: "Staff",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 3,
    UserName: "Chetan Mohamed",
    role: "Admin",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 4,
    UserName: "Derick Maximinus",
    role: "Member",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 5,
    UserName: "Friderik Dávid",
    role: "Staff",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 6,
    UserName: "Yiorgos Avraamu",
    role: "Member",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 7,
    UserName: "Avram Tarasios",
    role: "Staff",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 8,
    UserName: "Quintin Ed",
    role: "Admin",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 9,
    UserName: "Enéas Kwadwo",
    role: "Member",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 10,
    UserName: "Agapetus Tadeáš",
    role: "Staff",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 11,
    UserName: "Carwyn Fachtna",
    role: "Member",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 12,
    UserName: "Nehemiah Tatius",
    role: "Staff",
    email: "test@test.com",
    choose: "",
  },
  {
    id: 13,
    UserName: "Ebbe Gemariah",
    role: "Admin",
    email: "test@test.com",
    choose: "",
  },
];
const filesData = [
  {
    id: 0,
    FileName: "File One",
    choose: "",
  },
  {
    id: 1,
    FileName: "File Two",
    choose: "",
  },
  {
    id: 2,
    FileName: "File Three",
    choose: "",
  },
  {
    id: 3,
    FileName: "File Four",
    choose: "",
  },
  {
    id: 4,
    FileName: "File Five",
    choose: "",
  },
  {
    id: 5,
    FileName: "File One",
    choose: "",
  },
  {
    id: 6,
    FileName: "File One",
    choose: "",
  },
  {
    id: 7,
    FileName: "File One",
    choose: "",
  },
  {
    id: 8,
    FileName: "File One",
    choose: "",
  },
];

const initialForm = {
  firstName: "",
  lastName: "",
  mobileInput: "",
  emailInput: "",
};

const SendFiles2sign = () => {
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

  const fieldsUsers = [
    { key: "UserName", _style: { width: "100%" } },
    { key: "email", _style: { width: "100%" } },
    {
      key: "choose",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const fieldsFiles = [
    { key: "FileName", _style: { width: "100%" } },
    {
      key: "choose",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Signed":
        return "success";
      case "Pending":
        return "warning";
      case "Rejected":
        return "danger";
      default:
        return "primary";
    }
  };
  const handleCheckboxClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <CForm onSubmit={handleFormSubmit} wasValidated={false}>
      <CCard>
        <CCardHeader>
          Send files 2sign
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CFormGroup row >
            <CCol lg="6" className="p-5">
              <h3 className="pb-5">Choose user to send files</h3>
              <CDataTable
                items={usersData}
                fieldsUsers={fieldsUsers}
                tableFilter
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                pagination
                scopedSlots={{
                  choose: (item) => (
                    <td className="pl-5">
                      <CInputCheckbox
                        id="checkbox1"
                        name="checkbox1"
                        value={item.id}
                      />
                    </td>
                  ),
                }}
              />
            </CCol>
            <CCol lg="6" className="p-5">
              <h3 className="pb-5">Choose files to send</h3>
              <CDataTable
                items={filesData}
                fieldsUsers={fieldsFiles}
                tableFilter
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                pagination
                scopedSlots={{
                  choose: (item) => (
                    <td className="pl-5">
                      <CInputCheckbox
                        onClick={handleCheckboxClick}
                        id="checkbox1"
                        name="checkbox1"
                        value={item.id}
                      />
                    </td>
                  ),
                }}
              />
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

export default SendFiles2sign;
