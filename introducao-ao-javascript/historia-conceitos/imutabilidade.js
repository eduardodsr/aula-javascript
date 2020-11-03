/* 

(() => {
  const user = {
    name: "Eduardo",
    lastName: "Rodrigues"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})();

*/


const user = {
  name: "Eduardo",
  lastName: "Rodrigues"
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  };
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName)
