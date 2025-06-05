/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
array and print it out.
**/

function sortUserName(users) {
  if (users.length < 0) {
    return
  }
  const sortedUsers = users.sort((a, b) => {
    const keyA = `${_safeString(a.firstName)}${_safeString(a.lastName)}${_safeString(a.customerID)}`;
    const keyB = `${_safeString(b.firstName)}${_safeString(b.lastName)}${_safeString(b.customerID)}`;
    return keyA.localeCompare(keyB);
  });
  console.log('sortedUsers', sortedUsers)
  return sortedUsers;
}

function _safeString(value) {
  return String(value ?? '');
}