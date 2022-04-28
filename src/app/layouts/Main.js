
import {Link} from 'react-router-dom'
function Main({pageTitle,breadcrumsName,content}) {

  return (
<div className="content-wrapper">
<div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">{pageTitle}</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">{breadcrumsName}</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>

{content}
</div>
  )
}

export default Main
