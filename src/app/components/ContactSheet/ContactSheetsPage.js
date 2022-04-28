import React from "react";
import ContactList from "./ContactList";

import Layout from "../../Layout";

const ContactSheetsPage = () => {


    return (

        <Layout pTitle = { "Conatactsheet" }
        brcrumsName = { "Conatactsheets" } >

        <section className = "content" >
        <div className = "container-fluid" > { /* Small boxes (Stat box) */ }
        <div className = "row" >
        <div className = "col-12" >
        <div className="card">
  <div className="card-header">
    <h3 className="card-title">ContactSheet List</h3>
  </div>
  <div className="card-body">
        <ContactList / >
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>


        </Layout>

    )
}
export default (ContactSheetsPage);
