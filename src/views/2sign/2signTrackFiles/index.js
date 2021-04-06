import React, { useState } from "react";
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CCollapse,
  CCard,
} from "@coreui/react";

const usersData = [
  {
    id: 0,
    SentTo: "John Doe",
    SentDate: "2018/01/01",
    role: "Guest",
    status: "Pending",
  },
  {
    id: 1,
    SentTo: "Samppa Nori",
    SentDate: "2018/01/01",
    role: "Member",
    status: "Signed",
  },
  {
    id: 2,
    SentTo: "Estavan Lykos",
    SentDate: "2018/02/01",
    role: "Staff",
    status: "Rejected",
  },
  {
    id: 3,
    SentTo: "Chetan Mohamed",
    SentDate: "2018/02/01",
    role: "Admin",
    status: "Pending",
  },
  {
    id: 4,
    SentTo: "Derick Maximinus",
    SentDate: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 5,
    SentTo: "Friderik Dávid",
    SentDate: "2018/01/21",
    role: "Staff",
    status: "Signed",
  },
  {
    id: 6,
    SentTo: "Yiorgos Avraamu",
    SentDate: "2018/01/01",
    role: "Member",
    status: "Signed",
  },
  {
    id: 7,
    SentTo: "Avram Tarasios",
    SentDate: "2018/02/01",
    role: "Staff",
    status: "Rejected",
  },
  {
    id: 8,
    SentTo: "Quintin Ed",
    SentDate: "2018/02/01",
    role: "Admin",
    status: "Pending",
  },
  {
    id: 9,
    SentTo: "Enéas Kwadwo",
    SentDate: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 10,
    SentTo: "Agapetus Tadeáš",
    SentDate: "2018/01/21",
    role: "Staff",
    status: "Signed",
  },
  {
    id: 11,
    SentTo: "Carwyn Fachtna",
    SentDate: "2018/01/01",
    role: "Member",
    status: "Signed",
  },
  {
    id: 12,
    SentTo: "Nehemiah Tatius",
    SentDate: "2018/02/01",
    role: "Staff",
    status: "Rejected",
  },
  {
    id: 13,
    SentTo: "Ebbe Gemariah",
    SentDate: "2018/02/01",
    role: "Admin",
    status: "Pending",
  },
  {
    id: 14,
    SentTo: "Eustorgios Amulius",
    SentDate: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 15,
    SentTo: "Leopold Gáspár",
    SentDate: "2018/01/21",
    role: "Staff",
    status: "Signed",
  },
  {
    id: 16,
    SentTo: "Pompeius René",
    SentDate: "2018/01/01",
    role: "Member",
    status: "Signed",
  },
  {
    id: 17,
    SentTo: "Paĉjo Jadon",
    SentDate: "2018/02/01",
    role: "Staff",
    status: "Rejected",
  },
  {
    id: 18,
    SentTo: "Micheal Mercurius",
    SentDate: "2018/02/01",
    role: "Admin",
    status: "Pending",
  },
  {
    id: 19,
    SentTo: "Ganesha Dubhghall",
    SentDate: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 20,
    SentTo: "Hiroto Šimun",
    SentDate: "2018/01/21",
    role: "Staff",
    status: "Signed",
  },
  {
    id: 21,
    SentTo: "Vishnu Serghei",
    SentDate: "2018/01/01",
    role: "Member",
    status: "Signed",
  },
  {
    id: 22,
    SentTo: "Zbyněk Phoibos",
    SentDate: "2018/02/01",
    role: "Staff",
    status: "Rejected",
  },
  {
    id: 23,
    SentTo: "Aulus Agmundr",
    SentDate: "2018/01/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 42,
    SentTo: "Ford Prefect",
    SentDate: "2001/05/25",
    role: "Alien",
    status: "Signed",
  },
];

const TrackFiles2sign = () => {
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
    { key: "SentTo", _style: { width: "40%" } },
    "SentDate",
    { key: "status", _style: { width: "20%" } },
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
  return (
    <CCard>
      <CCardBody>
        <CDataTable
          items={usersData}
          fields={fields}
          columnFilter
          tableFilter
          footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            status: (item) => (
              <td>
                <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
              </td>
            ),
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default TrackFiles2sign;
