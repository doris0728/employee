const Airtable = require('airtable');
const data = require('./dataController.js');

const base = new Airtable({
  apiKey: 'keyA7EKdngjou4Dgy',
}).base('appcXtOTPnE4QWIIt');
const TABLE = base('ClassDay');
const VIEW = 'Main View';
//const LIMIT = 10;


exports.displaySupplier = async (req, res) => {
  let id = req.params.id;
  const classday = await data.getSupplierById(TABLE, id);
  res.render('classday', { classday });
}