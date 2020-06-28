import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    const contactContext = useContext(Contactcontext);

    const { contacts } =contactContext;

    return (
       <Fragment>
           {contacts.map(contact => 
           <h3>{contact.name}</h3>)}
       </Fragment>
    )
}

export default Contacts;

//3:32