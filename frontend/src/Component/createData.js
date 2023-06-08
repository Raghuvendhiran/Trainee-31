import axios from "axios";

const createData = async (type, body) => {
  const result = await axios.post(`${process.env.REACT_APP_BaseURl}/${type}`, body);
  return result;
};

export default createData;
