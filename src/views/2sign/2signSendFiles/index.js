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
    id: 14,
    FileName: "File One",
    choose: "",
  },
  {
    id: 15,
    FileName: "File Two",
    choose: "",
  },
  {
    id: 16,
    FileName: "File Three",
    choose: "",
  },
  {
    id: 17,
    FileName: "File Four",
    choose: "",
  },
  {
    id: 18,
    FileName: "File Five",
    choose: "",
  },
  {
    id: 19,
    FileName: "File One",
    choose: "",
  },
  {
    id: 20,
    FileName: "File One",
    choose: "",
  },
  {
    id: 21,
    FileName: "File One",
    choose: "",
  },
  {
    id: 22,
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
  const [checkedList, setCheckedList] = useState([]);

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
    const tempAtt = checkedList;
    var index = tempAtt.indexOf("" + e.target.value);

    if (index >= 0) {
      tempAtt.splice(index, 1);
    } else {
      tempAtt.push(e.target.value);
    }

    console.log(tempAtt);
    setCheckedList(tempAtt);
    console.log(e.target.value);
  };
  const handleRowClick = (e) => {
    console.log(e.id);
  };
  return (
    <CForm onSubmit={handleFormSubmit} wasValidated={false}>
      <CCard>
        <CCardHeader>
          Send files 2sign
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CFormGroup row>
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
                onRowClick={handleRowClick}
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
                onRowClick={handleRowClick}
                scopedSlots={{
                  choose: (item) => (
                    <td className="pl-5">
                      <CInputCheckbox
                        onClick={handleCheckboxClick}
                        id="checkbox1"
                        name="checkbox1"
                        value={item.id}
                        // checked={checkedList.includes(""+ item.id)}
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
