import { useState } from "react";
import GetDataForm from "./GetdataForm";
import TestForm from "./TestForm";

const Test = () => {
  const [showAvg, setShow] = useState(false);
  const [averages, setAverage] = useState([]);
  const [data, setResults] = useState('');
  const [actionId, setActionId] = useState();
  const [sampleObj, setObj] = useState();
  
  //if(averages.status===200) console.log(actionId, ' ', protectionGoodsId);
  if(averages.status===200) console.log(sampleObj, 'chera');
  return (
    <main role="main" className="dashboard flex">
      <div className="border-bottom mt-4 ">
        <h2 className="h2 mb-3">Evaluation</h2>
      </div>
      <div>
        <div className="form-group">
          {showAvg ? (
            <>
              <div>
                <TestForm allAvgs={averages} action_id={actionId} samObj={sampleObj}/>
              </div>
            </>
          ) : (
            <GetDataForm getObj={setObj} setRes={setResults} showFunc={setShow} getAverages={setAverage} getActionId={setActionId}/>
          )}
        </div>
      </div>
    </main>
    /*
  
      <>
        {show ? ( 
          <>
            <div>
              no
              {Object.keys(data1).map((key, index) => {
                return (
                  <div key={index}>
                    <h2>
                        {index}
                    </h2>

                    <hr />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
        </>*/
  );
};

export default Test;
