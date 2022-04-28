import React, {useState, useEffect,useRef,useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllContactsheets } from "../../../redux/contactsheet/contactsheetAPIService";
import { reset } from "../../../redux/contactsheet/contactsheetSlice";
import PropTypes from "prop-types";
//import DataTable from 'datatables.net';
//import $ from "jquery";
import DataTable from "react-data-table-component";
import {useNavigate } from "react-router-dom";
import Spinner from "../../layouts/Spinner";
import { FaEdit } from "react-icons/fa";


const ContactList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

 // $.DataTable = DataTable
  //const tableRef = useRef()
    const { contacts, isLoading, isError, msg } = useSelector(
      (state) => state.contacts
    )
    const [contactsheets,setContactsheets] = useState([]);
    const [search,setSearch] = useState("");



const columns=[
  {
    name:"Track No",
    selector:(row)=>row.track_no,
    sortable:true
  },
{ name: "Direct",selector:(row)=>row.direct,
sortable:true},
{ name: "Date",selector:(row)=>row.date,
sortable:true},
{ name: "Email",selector:(row)=>row.email,
sortable:true},
{ name: "Phone Number",selector:(row)=>row.phone_number,
sortable:true},
{ name: "Action",cell:(row)=><button className="nav-icon fas" onClick={()=>alert(row.id)}><FaEdit/></button>},]

      useEffect(() => {

        if (isError) {
          console.log(msg)
        }


        // if (!user) {
        //   navigate('/login')
        // }

      //   let sheet_data = [];
      //   contacts.map(contact=>sheet_data.push(Object.values(contact)));
      //   console.log(sheet_data);
      //   const table = $(tableRef.current).DataTable(
      //     {
      //         data: sheet_data,
      //             columns: [
      //               { title: "ID"},
      //                 { title: "Track No"},
      //                 { title: "Direct"},
      //                 { title: "Date"},
      //                 { title: "Email"},
      //                 { title: "Phone Number"},
      //             ],
      //             "order": [[ 1, "desc" ]],
      //             destroy: true  // I think some clean up is happening here
      //     }
      // )

        dispatch(getAllContactsheets())
       //setContactsheets(contacts);
        return () => {
          dispatch(reset())
         // table.destroy()
        }
      }, [navigate, isError, msg, dispatch])
      const getSheetDetail = useCallback((search) => {

        const result = contacts.filter(contact=>contact.track_no.toLowerCase().match(search.toLowerCase()) ||  JSON.stringify(contact).indexOf(search) >= 0);
        setContactsheets(result);
      }, [contacts])

      useEffect(() => {

        getSheetDetail(search)

      }, [getSheetDetail,search])

      if(isLoading) {<Spinner />}
    return (
        <>

        <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
        <div className="row">

        <DataTable
            columns={columns}
            data={contactsheets}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="500px"
            striped
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={ <div className="col-sm-12 col-6"><div className="dt-buttons btn-group flex-wrap">
            <button className="btn btn-secondary buttons-copy buttons-html5" tabIndex={0} aria-controls="example1" type="button">
             <span>Copy</span></button> <button className="btn btn-secondary buttons-csv buttons-html5" tabIndex={0} aria-controls="example1" type="button"><span>CSV</span></button> <button className="btn btn-secondary buttons-excel buttons-html5" tabIndex={0} aria-controls="example1" type="button"><span>Excel</span></button> <button className="btn btn-secondary buttons-pdf buttons-html5" tabIndex={0} aria-controls="example1" type="button"><span>PDF</span></button> <button className="btn btn-secondary buttons-print" tabIndex={0} aria-controls="example1" type="button"><span>Print</span></button> <div className="btn-group"><button className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis" tabIndex={0} aria-controls="example1" type="button" aria-haspopup="true"><span>Column visibility</span><span className="dt-down-arrow" /></button></div> </div></div>}
             subHeader
              subHeaderComponent={<div className="col-sm-12 col-6"><div id="example1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" placeholder aria-controls="example1"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              /></label></div></div>}
              />
               </div></div>
 {/*<table className="table table-bordered table-striped dataTable dtr-inline collapsed"  width="100%" ref={ tableRef }></table> */}
{/* <table className="table table-responsive-lg table-striped table-hover" >

<thead className="table-light">
  <tr>
    <th>track no</th>
    <th>direct</th>
    <th>date</th>
    <th>email</th>
    <th>Phone</th>
  </tr>

  </thead>
  {contacts.length === 0 ?
  <tbody >
     <tr >
       <td colSpan={5}><strong style={{textAlign:'center'}} className='p-2'>Contactsheet is empty</strong></td>
       </tr>
       </tbody>
        : contacts.map((contact,i) => (
  <tbody key={i}>
    <tr >
      <td>{contact.track_no}</td>
      <td>{contact.direct}</td>
      <td>{contact.date}</td>
      <td>{contact.email}</td>
      <td>{contact.phone_number}</td>
    </tr>
  </tbody>
  )
  )}
            </table> */}

        </>
    )

    }
    ContactList.propTypes = {
      contacts: PropTypes.array,
      isLoading:PropTypes.bool,
      isError:PropTypes.bool,
      msg:PropTypes.string || PropTypes.object
    };
export default ContactList;




