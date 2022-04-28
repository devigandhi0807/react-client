import React, { useState,useEffect, useRef } from "react";
import Layout from "../../Layout";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast ,Zoom} from "react-toastify";
import { reset } from "../../../redux/contactsheet/contactsheetSlice";
import { createContactsheet } from "../../../redux/contactsheet/contactsheetAPIService";
import validate from '../../helper/validationSheet';
import Spinner from "../../layouts/Spinner";

const AddContact = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.user);
  const { contacts, isLoading, isError, isSuccess, msg } = useSelector(
    (state) => state.contacts
  )
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
        track_no: "", direct: "", date: "",index: "",type: "",instrument: "",lease_royalty: "",acres: "",
        offer: "",address: "",city: "",state: "",zip: "",phone_number: "",email: "",mailer_sent: "",
        notes: "", new_well_info: "",section: "",township: "",range: "",operator: ""
  });

  const { track_no,  direct,date,index,type,instrument,lease_royalty,acres,
  offer,address,city,state,zip, phone_number, email,mailer_sent,notes,
  new_well_info,section,township,range,operator} = formData;

const [errors, setErrors] = useState({});


  useEffect(() => {


    return () => {
      dispatch(reset())
    }
  }, [contacts, isError, isSuccess, msg, navigate, dispatch])

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 ) {
  //      cb();
  //     }
  //   },
  //   [errors]
  // );
//const formRef = useRef();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const contactData= { track_no,direct,date,index,type,instrument,lease_royalty,acres,
      offer,address,city,state,zip, phone_number, email,mailer_sent,notes,
      new_well_info,section,township,range,operator};
      setErrors(validate(formData));

    dispatch(createContactsheet(contactData));

  };

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    toast.error(msg)
  }
  if (isSuccess) {
    navigate('/contactsheets')
  }
  return (
<Layout pTitle={"Add ContactSheet"} brcrumsName={"Add ContactSheet"}>
<ToastContainer transition={Zoom}/>
    <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
      <div className="row">
          <div className="col-12">

<div className="card card-primary">
  <div className="card-header">
    <h3 className="card-title">Add ContactSheet</h3>
  </div>
  {/* /.card-header */}
  {/* form start */}

  <form onSubmit={handleOnSubmit} id="sheetForm" >

    <div className="card-body">
    <div className="row">
      <div className="col-6">
      <div className="form-group">
        <label htmlFor="inputTrackNo">Track No</label>
        <input type="text" className="form-control" name ="track_no" id="inputTrackNo"  placeholder="Enter Track No" value={track_no} onChange={handleOnChange}/>
        {errors.track_no && <span >{errors.track_no}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputDirect">Direct</label>
        <input type="text" className="form-control" name ="direct" id="inputDirect" placeholder="Enter Direct" value={direct} onChange={handleOnChange}/>
        {errors.direct &&  <span id="inputDirect-error" >{errors.direct}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputDate">Date</label>
        <input type="text" className="form-control" name ="date" id="inputDate" placeholder="Enter Date" value={date} onChange={handleOnChange}/>
        {errors.date &&  <span id="inputDate-error" >{errors.date}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaIndex">Index</label>
        <textarea className="form-control" name="index" id="textAreaIndex" rows="3" placeholder="Enter Index" value={index} onChange={handleOnChange} />
        {errors.index &&  <span id="textAreaIndex-error" >{errors.index}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaType">Type</label>
        <textarea className="form-control" name="type" id="textAreaType" rows="3" placeholder="Enter Type" value={type} onChange={handleOnChange}/>
        {errors.type &&  <span id="textAreaType-error" >{errors.type}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaInstrument">Instrument</label>
        <textarea className="form-control" name="instrument" id="textAreaInstrument" rows="3" placeholder="Enter Instrument" value={instrument} onChange={handleOnChange}/>
        {errors.instrument &&  <span id="textAreaInstrument-error" >{errors.instrument}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaLeaseRoyalty">Lease Royalty</label>
        <textarea className="form-control" name="lease_royalty" id="textAreaLeaseRoyalty" rows="3" placeholder="Enter Lease Royalty" value={lease_royalty} onChange={handleOnChange}/>
        {errors.lease_royalty &&  <span id="textAreaLeaseRoyalty-error">{errors.lease_royalty}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaAcres">Acres</label>
        <input type="text" className="form-control" name="acres" id="textAreaAcres" placeholder="Enter Acres"  value={acres} onChange={handleOnChange} />
        {errors.acres &&  <span id="textAreaAcres-error" >{errors.acres}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaOffer">Offer</label>
        <textarea className="form-control" name="offer" id="textAreaOffer" rows="3" placeholder="Enter Offer" value={offer} onChange={handleOnChange}/>
        {errors.offer &&  <span id="textAreaOffer-error" >{errors.offer}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaAddress">Address</label>
        <textarea className="form-control" name="address" id="textAreaAddress" rows="3" placeholder="Enter Address" value={address} onChange={handleOnChange}/>
        {errors.address &&  <span id="textAreaAddress-error" class="error invalid-feedback">{errors.address}</span>}
      </div>

      </div>
      <div className="col-6">

      <div className="form-group">
        <label htmlFor="inputCity">City</label>
        <input type="text" className="form-control" name="city" id="inputCity" placeholder="Enter City" value={city} onChange={handleOnChange}/>
        {errors.city &&  <span id="inputCity-error" className="error invalid-feedback">{errors.city}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputState">State</label>
        <input type="text" className="form-control" name="state" id="inputState" placeholder="Enter State" value={state} onChange={handleOnChange}/>
        {errors.state &&  <span id="inputState-error" className="error invalid-feedback">{errors.state}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputZip">Zip</label>
        <input type="text" className="form-control" id="inputZip" name="zip" placeholder="Enter Zip Code" value={zip} onChange={handleOnChange}/>
        {errors.zip &&  <span id="inputZip-error" className="error invalid-feedback">{errors.zip}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputPhoneNumber">Phone Number</label>
        <input type="text" className="form-control" name="phone_number" id="inputPhoneNumber" placeholder="Enter Phone Number" value={phone_number} onChange={handleOnChange}/>
        {errors.phone_number &&  <span id="inputPhoneNumber-error" className="error invalid-feedback">{errors.phone_number}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input type="email" className="form-control" name="email" id="inputEmail" placeholder="Enter Email" value={email} onChange={handleOnChange}/>
        {errors.email &&  <span >{errors.email}</span>}

      </div>
      <div className="form-group">
        <label htmlFor="inputMailer">Mailer Sent(Y/N)</label>
       <textarea className="form-control" name="mailer_sent" id="inputMailer" rows="3" placeholder="Enter Mailer Sent" value={mailer_sent} onChange={handleOnChange}/>
       {errors.mailer_sent &&  <span id="inputMailer-error" className="error invalid-feedback">{errors.mailer_sent}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaNotes">Notes</label>
       <textarea className="form-control" name="notes" id="textAreaNotes" rows="3" placeholder="Enter Notes" value={notes} onChange={handleOnChange} />
       {errors.notes &&  <span id="textAreaNotes-error" className="error invalid-feedback">{errors.notes}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="textAreaNewWellInfo">New Well Info</label>
       <textarea className="form-control" name="new_well_info" id="textAreaNewWellInfo" rows="3" placeholder="Enter New Well Info" value={new_well_info} onChange={handleOnChange} />
       {errors.new_well_info &&  <span id="textAreaNewWellInfo-error" className="error invalid-feedback">{errors.new_well_info}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputSection">Section</label>
        <input type="text" className="form-control" name="section" id="section" placeholder="Enter Section" value={section} onChange={handleOnChange} />
        {errors.section &&  <span id="inputSection-error" className="error invalid-feedback">{errors.section}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputTownship">Township</label>
        <input type="text" className="form-control" name="township" id="inputTownship" placeholder="Enter Township" value={township} onChange={handleOnChange} />
        {errors.township &&  <span id="inputTownship-error" className="error invalid-feedback">{errors.township}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputRange">Range</label>
        <input type="text" className="form-control" name="range" id="inputRange" placeholder="Enter Range" value={range} onChange={handleOnChange} />
        {errors.range &&  <span id="inputRange-error" className="error invalid-feedback">{errors.range}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="inputOperator">Operator</label>
        <input type="text" className="form-control" name="operator" id="inputOperator" placeholder="Enter Operator" value={operator} onChange={handleOnChange} />
        {errors.operator &&  <span id="inputOperator-error" className="error invalid-feedback">{errors.operator}</span>}
      </div>
      </div>
      </div>
      {/*<div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
       <div className="form-group">
        <label htmlFor="exampleInputFile">File input</label>
        <div className="input-group">
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="exampleInputFile" />
            <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
          </div>
          <div className="input-group-append">
            <span className="input-group-text">Upload</span>
          </div>
        </div>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div> */}
    </div>

    <div className="card-footer">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
</div>
</div>
</div>
</section>

</Layout>


  );
};
export default AddContact;
