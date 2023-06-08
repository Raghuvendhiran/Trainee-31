import axios from "axios";

const ListAll = async () => {
  const mentor = await axios.get(`${process.env.REACT_APP_BaseURl}/mentor`);
  const student = await axios.get(`${process.env.REACT_APP_BaseURl}/student`);

  const result = {
    mentor: mentor.data,
    student: student.data,
  };

  return result;
};

export default ListAll;
