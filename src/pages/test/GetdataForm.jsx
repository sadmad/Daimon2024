import { useState } from "react";
import ReactLaoding from "react-loading";

const GetDataForm = (props) => {
  const result = [];
  const [action, setAction] = useState(1);
  const [isloading, setGetingMean] = useState(false);
  const [goods, setGoods] = useState(1);

  //sample object that used in the testform component
  const obj = {
    "model_id": 0,
    "action_id": Number(action),
    "protection_good_id": Number(goods),
    "user_id": 2,
    "data": [{}],
  };

  console.log(obj);
  const getMeansHandler = async (event) => {
    event.preventDefault();
    setGetingMean(true);

    const formData = new FormData();

    formData.append("action_id", action);
    formData.append("protection_goods_id", goods);

    let result = await fetch("http://localhost:5000/dss/getAverages", {
      method: "post",
      mode: "cors",
      body: formData,
    });
    result = await result.json();
    const res = JSON.parse(result);

    //completing the object in the form that usded in testform component
    const avg = res.results[0];
    Object.keys(avg).map((key, index) => {
      const name = key;
      obj.data[0][name]= 0;
    });
    const sampleObj = obj;
 
    //console.log(sampleObj, "get zeros");
    props.getAverages(res);
    props.setRes(res.results[0]);

    setGetingMean(false);

    // will show the message from api console.log(data.status);
    //console.log(result);
    props.showFunc(true);
    props.getActionId(action);
    props.getObj(sampleObj);
    /* Object.keys(data1).map((key, index) => {
      return (
        console.log(data1[key].min)
      )
    }) */
  };

  return (
    <>
      {isloading ? (
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
        <form onSubmit={getMeansHandler}>
          <div className="field">
            <h4 className="h4 dark-grey-text mt-5 mb-4">
              Choose The Amucad field(action)
            </h4>
            <section className="border p-3">
              <div className="form-check">
              <label className="form-check-lable" htmlFor="amucad">
                <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => {
                    setAction(1);
                  }}
                  name="field"
                  value="1"
                />
                
                  Explosion
                </label>
              </div>
              <div className="form-check">
              <label className="form-check-lable" htmlFor="amucad">
                <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => {
                    setAction(2);
                  }}
                  name="field"
                  value="2"
                />
                
                  Corrosion
                </label>
              </div>
            </section>
          </div>
          <div className="goods">
            <h4 className="h4 dark-grey-text mt-5 mb-4">Protection Goods</h4>
            <section className="border p-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="NN"
                  name="goods"
                  onChange={(e) => {
                    setGoods(1);
                  }}
                  value="1"
                />
                <label className="form-check-lable" htmlFor="goods">
                  Shiping
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="RF"
                  name="goods"
                  onChange={(e) => {
                    setGoods(2);
                  }}
                  value="2"
                />
                <label className="form-check-lable" htmlFor="goods">
                  Flaura/Fauna
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="RF"
                  name="goods"
                  onChange={(e) => {
                    setGoods(3);
                  }}
                  value="3"
                />
                <label className="form-check-lable" htmlFor="goods">
                  Drivers
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="RF"
                  name="goods"
                  onChange={(e) => {
                    setGoods(4);
                  }}
                  value="4"
                />
                <label className="form-check-lable" htmlFor="goods">
                  Tourism
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="RF"
                  name="goods"
                  onChange={(e) => {
                    setGoods(5);
                  }}
                  value="5"
                />
                <label className="form-check-lable" htmlFor="goods">
                  Fishers
                </label>
              </div>
            </section>
          </div>

          <div className="form-check">
            <button
              className="btn btn-primary"
              type="submit"
              name="Train"
              value="Train"
            >
              Get
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default GetDataForm;
