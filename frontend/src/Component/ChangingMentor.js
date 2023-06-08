import axios from "axios";

const ChangingMentor = async (body) => {
  const result = await axios.post(`${process.env.REACT_APP_BaseURl}/modifyMentor`, body);
  return result;
};
export default ChangingMentor;
