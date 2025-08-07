import { useState } from "react";
import axios from "axios";
// import { useUser } from "../components/ContextApi/UserContext";

const Home = () => {
//   const { user, removeUser } = useUser();
//   const [error, setError] = useState({});
//   const [monthYear, setMonthYear] = useState("");
//   const [regno, setregno] = useState("");
//   const [studentDetail, setstudentDetail] = useState({
//     studentname: "",
//     regno: "",
//     program: "",
//     fathername: "",
//     feelist: [],
//   });

//   const handleShowFeeDetail = async () => {
//     try {
//       const response = await axios.post(
//         `http://localhost:1000/get-fee-detail/${regno}`
//       );
//       setstudentDetail(response.data.data);
//     } catch (error) {
//       console.log(error);
//       setError({ message: "Failed to fetch student details." });
//     }
//   };

  return (
    <>
      <div className="d-flex">
        <h1>Welcome to BMS</h1>

      </div>
    </>
  );
};

export default Home;
