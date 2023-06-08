import axios from "axios";

const AddingStudentsToMentor = async (body) => {
  const result = await axios.post(`${process.env.REACT_APP_BaseURl}/newMentor`, body);
  return result;
};

export default AddingStudentsToMentor;
