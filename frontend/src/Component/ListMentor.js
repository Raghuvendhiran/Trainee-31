import axios from "axios";

const ListMentor = async (mentorID) => {
  const result = await axios.get(`${process.env.REACT_APP_BaseURl}/mentor/${mentorID}`);
  return result.data;
};
export default ListMentor;
