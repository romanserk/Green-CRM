import React, { useState } from "react";
import { connect } from "react-redux";
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CCollapse,
  CCard,
} from "@coreui/react";



const LeadsList = (props) => {
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "name", _style: { width: "20%" } },
    { key: "email", _style: { width: "20%" } },
    { key: "mobile", _style: { width: "20%" } },
    "registered",
    "signature",
    { key: "status", _style: { width: "10%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <CCard>
      <CCardBody>
        <CDataTable
          items={props.usersData}
          fields={fields}
          columnFilter
          tableFilter
          footer
          itemsPerPageSelect
          itemsPerPage={10}
          hover
          sorter
          pagination
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
            show_details: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      toggleDetails(index);
                    }}
                  >
                    {details.includes(index) ? "Hide" : "Show"}
                  </CButton>
                </td>
              );
            },
            details: (item, index) => {
              return (
                <CCollapse show={details.includes(index)}>
                  <CCardBody>
                    <h4>{item.username}</h4>
                    <p className="text-muted">User since: {item.registered}</p>
                    <CButton size="sm" color="info">
                      User Settings
                    </CButton>
                    <CButton size="sm" color="danger" className="ml-1">
                      Delete
                    </CButton>
                  </CCardBody>
                </CCollapse>
              );
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.usersData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // setSearchText: (searchText) => dispatch(setSearchText(searchText)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LeadsList);
