import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import axios from 'axios';

import { 
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CLEAR_CONTACTS,
    CONTACT_ERROR
 } from '../types';

 const ContactState = props => {
     const initialState = {
         contacts:  [],
         current: null,
         filtered:null,
         error:null
     };

     const [state, dispatch] = useReducer(contactReducer, initialState);

     //GET CONTACTS hit the backend api/contacts w a get request
     const getContacts = async () => {

        try {
            const res = await axios.get('/api/contacts');
            dispatch({ type: GET_CONTACTS, payload: res.data });
        } catch (err) {
            dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
        }


        
    };

     

     //ACTIONS TO CREATE
     //ADD CONTACT //then connect to backend
     const addContact = async contact => {
         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }

         try {
             const res = await axios.post('/api/contacts', contact, config);
             dispatch({ type: ADD_CONTACT, payload: res.data });
         } catch (err) {
             dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
         }


         
     };

     //DELETE CONTACT
     const deleteContact = id => {
       
        dispatch({ type: DELETE_CONTACT, payload:id });
    };

     //SET CURRENT CONTACT
     const setCurrent = contact => {
       
        dispatch({ type: SET_CURRENT, payload: contact });
    };

     //CLEAR CURRENT CONTACT
     const clearCurrent = () => {
       
        dispatch({ type: CLEAR_CURRENT });
    };

     //UPDATE CONTACT
     const updateContact = contact => {
       
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };


     //FILTER CONTACTS
     const filterContacts = text => {
       
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };


     //CLEAR FILTER

     const clearFilter = () => {
       
        dispatch({ type: CLEAR_FILTER });
    };

     return (
         <ContactContext.Provider 
         value={{
             contacts:state.contacts,
             current:state.current,
             addContact,
             deleteContact,
             setCurrent,
             clearCurrent,
             updateContact,
             filtered: state.filtered,
             error: state.error,
             filterContacts,
             clearFilter,
             
         }}>

             { props.children }
         </ContactContext.Provider>
     )
 };

 export default ContactState; 