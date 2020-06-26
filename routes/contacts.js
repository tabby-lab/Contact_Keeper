const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route GET api/contacts
// @description get all users contacts
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

// @route POST api/contacts
// @description Add new contact
// @access Private
router.post('/', [auth, [
    check('name', 'Name is required')
        .not()
        .isEmpty()

 ]
 ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
//pulling data from body
    const { name, email, phone, type } = req.body;

    try {
        const newContact = new Contact({
          name,
          email,  
          phone,
          type,
          user: req.user.id
        });
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error') 
    }

});

// @route PUT api/contacts/:id
// @description update contact
// @access Private
router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type } = req.body;

    //build contact object
    const contactFields = {};
    if(name) contactFields.name = name;
    if(email) contactFields.email = email;
    if(phone) contactFields.phone = phone;
    if(type) contactFields.type = type;
});

// @route DELETE api/contacts/:id
// @description Delete contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact')
});

module.exports = router;

//CRUD Route