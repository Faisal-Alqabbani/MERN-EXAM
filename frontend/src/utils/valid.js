const valid = ({ petName, petType, petDescription }) => {
  const err = {};

  if (!petName) {
    err.petName = "Please add Pet Name";
  } else if (petName.length < 3) {
    err.petName = "pet name must be at least 3 characters";
  }

  if (!petType) {
    err.petType = "Please add your pet Type";
  } else if (petType.length < 3) {
    err.petType = "pet name must be at least 3 characters";
  }
  if (!petDescription) {
    err.petDescription = "please add your pet description";
  } else if (petDescription.length < 6) {
    err.petDescription = "Pet Description must be at least 5 characters";
  }
  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};
// function validateEmail(email) {
//   // eslint-disable-next-line
//   const re =
//     // eslint-disable-next-line
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
export default valid;
