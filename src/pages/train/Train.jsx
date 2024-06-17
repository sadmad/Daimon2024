import TrainForm from "./TrainForm";
import "./Train.css";
import React, { useState }  from 'react';
import { width } from "@mui/system";

const Train = () => {
  const [istrained, setIsTrained] = useState(false);
  return (
    <main role="main" className="dashboard flex">
      <div className="border-bottom mt-4 ">
        <h2 className="h2 mb-3">Train The Data</h2>
      </div>
      <div>
        { istrained? (<div>Your training was successful</div>) : (<TrainForm trained={setIsTrained}/>) }
      </div>
    </main>
  );
};

export default Train;
