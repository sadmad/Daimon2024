import { useState, useEffect } from "react";
import ReactLaoding from "react-loading";

const TestForm = (props) => {
  //console.log(props.obj.data['CHARGE_114']);
  /*if (props.allAvgs.status === 200) {
  const [formObj, setFromObj] = useState({
    model_id: model,
    action_id: b,
    rotection_goods_id: a,
    user_id: 2,
    data: {},
  });
  
  #### this variable is contain everything -> allAvgs ####
  console.log(formObj);
  
  console.log(props.action_id);
  */
  //console.log(props.obj);
  const token = sessionStorage.getItem("tok");
  const [finalObj, setFinalObj] = useState({});

  //loading usestae
  const [isLoadingEv, setGettingEv] = useState(false);

  //showing the result of evaluation
  const [showEv, setShowingEv] = useState(false);
  const [showResult, setShowResutl] = useState({});
  //state for updating the Object
  useEffect(() => {
    setFinalObj(props.samObj);
  }, [props.samObj]);

  //update the object from the form
  const handleChanges = (e) => {
    setFinalObj((preObj) => {
      const newField = { ...preObj };
      newField.data[0][e.target.name] = Number(e.target.value);
      return newField;
    });
  };

  //update the model variable from the radio button input
  //there is a problem that the inputs would not be
  //updated without clicking on each of the inouts
  const handleModelChange = (e) => {
    setFinalObj((preObj) => {
      const newModel = { ...preObj };
      newModel.model_id = Number(e.target.value);
      return newModel;
    });
  };

  //just check if the object is updated well (it should be commented later)
  //if (props.allAvgs.status === 200) console.log(finalObj, "testForm comp");

  //fetch the data from the Flask API
  const getEvaluationHandler = async (event) => {
    event.preventDefault();
    setGettingEv(true);
    //console.log(finalObj);
    let result = await fetch(
      `http://127.0.0.1:5000/dss/evaluation?token=${token}`,
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([finalObj]),
      }
    );

    result = await result.json();
    if (result[0].status === 200) {
      setGettingEv(false);
      setShowingEv(true);
      setShowResutl(result[0].assessment_response)
      console.log(result)
      
    }
  };

  const avg = props.allAvgs.results[0];
  return (
    <>
      {showEv ? (
        <>
          <div>
             {JSON.stringify(showResult)}
          </div>
        </>
      ) : (
        <>
          {isLoadingEv ? (
            <div className="load">
              <ReactLaoding
                className="react-loading"
                type={"spinningBubbles"}
                color={"gray"}
              />
              <br />
              <div className="block-text-load">
                <span className="load-text">Gettig the data</span>
              </div>
            </div>
          ) : (
            <>
              <p>some text</p>
              <form onSubmit={getEvaluationHandler}>
                <div className="model">
                  <h4 className="h4 dark-grey-text mt-5 mb-4">
                    Please select the model that you want to test the data whit
                  </h4>
                  <section className="border p-3">
                    <div className="form-check">
                      <label className="form-check-lable" htmlFor="model">
                        <input
                          type="radio"
                          className="form-check-input"
                          onChange={handleModelChange}
                          name="model"
                          value="1"
                        />
                        Neural Network(scikit learn)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-lable" htmlFor="model">
                        <input
                          type="radio"
                          className="form-check-input"
                          onChange={handleModelChange}
                          name="model"
                          value="2"
                        />
                        RANDOM htmlForEST(scikit learn)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-lable" htmlFor="model">
                        <input
                          type="radio"
                          className="form-check-input"
                          onChange={handleModelChange}
                          name="model"
                          value="3"
                        />
                        LINEAR REGRESSION(scikit learn)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-lable" htmlFor="model">
                        <input
                          type="radio"
                          className="form-check-input"
                          onChange={handleModelChange}
                          name="model"
                          value="5"
                        />
                        DEEP NEURAL NETWORK(Keras+tensorflow)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-lable" htmlFor="model">
                        <input
                          type="radio"
                          className="form-check-input"
                          onChange={handleModelChange}
                          name="model"
                          value="6"
                        />
                        Decision Tree(scikit learn)
                      </label>
                    </div>
                  </section>
                </div>

                <div className="field">
                  <h4 className="h4 dark-grey-text mt-5 mb-4">
                    Please fill the field of evaluation
                  </h4>
                  <section className="border p-3">
                    <div className="form-check">
                      {Object.keys(avg).map((key, index) => {
                        if (avg[key].mean !== 0) {
                          return (
                            <div className="mb-3" key={index}>
                              <label className="form-label" htmlFor={key}>
                                {" "}
                                {key}
                                <input
                                  id={key}
                                  type="number"
                                  className="form-control"
                                  min={avg[key].min}
                                  max={avg[key].max}
                                  placeholder={avg[key].mean}
                                  step="0.0001"
                                  name={key}
                                  onChange={handleChanges}
                                  defaultValue={parseFloat(
                                    avg[key].mean
                                  ).toFixed(4)}
                                />
                                <div id="emailHelp" className="form-text" l>
                                  Mean: {avg[key].mean}, Max: {avg[key].max},
                                  Min:
                                  {avg[key].min}
                                </div>
                              </label>
                            </div>
                          );
                        }
                      })}
                      <div className="form-check">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          name="Train"
                          value="Train"
                        >
                          Evaluate
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TestForm;
