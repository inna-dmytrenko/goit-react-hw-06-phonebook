// function filterContacts(contacts, filter) {
//   return contacts.filter((obj) => {
//     return obj.name.toLowerCase().includes(filter.toLowerCase().trim());
//   });
// }
function filterContacts(contacts, value) {
  // console.log(value);
  return contacts.filter(obj => {
    return obj.name.toLowerCase().includes(value.toLowerCase().trim());
  });
}
export default filterContacts;
//   console.log(filterContacts(contacts, value));
