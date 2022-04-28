
export default function validateInfo(values) {
  let errors = {};

  if (!values.track_no.trim()) {
    errors.track_no = 'Track No required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.direct.trim()) {
    errors.direct = 'Direct required';
  }
  if (!values.date.trim()) {
    errors.date = 'Date required';
  }
  if (!values.index.trim()) {
    errors.index = 'Index required';
  }
  if (!values.type.trim()) {
    errors.type = 'Type required';
  }
  if (!values.instrument.trim()) {
    errors.instrument = 'Instrument required';
  }
  if (!values.lease_royalty.trim()) {
    errors.lease_royalty = 'Lease Royalty required';
  }
  if (!values.acres.trim()) {
    errors.acres = 'Acres required';
  }
  if (!values.offer.trim()) {
    errors.offer = 'Offer required';
  }
  if (!values.address.trim()) {
    errors.address = 'Address required';
  }
  if (!values.city.trim()) {
    errors.city = 'City required';
  }
  if (!values.state.trim()) {
    errors.state = 'State required';
  }
  if (!values.zip.trim()) {
    errors.zip = 'Zip required';
  }else if (!/^[0-9]+/.test(values.zip.trim())) {
       errors.zip = 'Enter a valid zip';
     }
  if (!values.phone_number.trim()) {
    errors.phone_number = 'Phone Number required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.mailer_sent.trim()) {
    errors.mailer_sent = 'Mailer Sent required';
  }
  if (!values.notes) {
    errors.notes = 'Notes required';
  }
  if (!values.new_well_info) {
    errors.new_well_info = 'New Well Info required';
  }
  if (!values.section) {
    errors.section = 'Section required';
  }
  if (!values.township) {
    errors.township = 'Township required';
  }
  if (!values.range) {
    errors.range = 'Range required';
  }
  if (!values.operator) {
    errors.operator = 'Operator required';
  }

  // if (!values.password) {
  //   errors.password = 'Password is required';
  // } else if (values.password.length < 6) {
  //   errors.password = 'Password needs to be 6 characters or more';
  // }

  // if (!values.password2) {
  //   errors.password2 = 'Password is required';
  // } else if (values.password2 !== values.password) {
  //   errors.password2 = 'Passwords do not match';
  // }
  return errors;
}




