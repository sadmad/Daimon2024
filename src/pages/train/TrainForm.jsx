import "./TrainForm.css";
import { useState } from "react";
import ReactLaoding from "react-loading";

const TrainhtmlForm = (props) => {
  const [isTrained, setIsTrained] = useState(false);
  const [model, setModel] = useState("");
  const [field, setField] = useState("");
  const [goods, setGoods] = useState("");

  const user_id = 2;
  const token = sessionStorage.getItem("tok");

  const trainHandler = async (event) => {
    event.preventDefault();
    setIsTrained(true);

    const formData = new FormData();

    formData.append("model_id", model);
    formData.append("action_id", field);
    formData.append("protection_goods_id", goods);
    formData.append("user_id", user_id);
    formData.append("token", token);

    let result = await fetch("http://localhost:5000/dss/training", {
      method: "POST",
      mode: "cors",
      body: formData,
    });
    result = await result.json();
    setIsTrained(false);
    console.log(result);
    props.trained(true);
  };
  return isTrained ? (
    <div className="load">
      <ReactLaoding
        className="react-loading"
        type={"spinningBubbles"}
        color={"gray"}
      />
      <br />
      <div className="block-text-load">
        <span className="load-text">Login</span>
      </div>
    </div>
  ) : (
    <div className="form-group">
      <form onSubmit={trainHandler}>
        <div className="model">
          <h4 className="h4 dark-grey-text mt-5 mb-4">
            Please select the model that you want to train the data whit
          </h4>
          <section className="border p-3">
            <div className="form-check">
              <label className="form-check-lable" htmlFor="model">
                <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => {
                    setModel(1);
                  }}
                  name="drone"
                  value="1"
                />
                Neural Network(scikit learn)
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(e) => {
                  setModel(2);
                }}
                name="drone"
                value="2"
              />
              <label className="form-check-lable" htmlFor="model">
                <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => {
                    setModel(2);
                  }}
                  name="drone"
                  value="2"
                />
                RANDOM htmlForEST(scikit learn)
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(e) => {
                  setModel(3);
                }}
                name="drone"
                value="3"
              />
              <label className="form-check-lable" htmlFor="model">
                <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => {
                    setModel(3);
                  }}
                  name="drone"
                  value="3"
                />
                LINEAR REGRESSION(scikit learn)
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(e) => {
                  setModel(5);
                }}
                name="drone"
                value="5"
              />
              <label className="form-check-lable" htmlFor="model">
                <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => {
                    setModel(5);
                  }}
                  name="drone"
                  value="5"
                />
                DEEP NEURAL NETWORK(Keras+tensorflow)
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(e) => {
                  setModel(6);
                }}
                name="drone"
                value="6"
              />
              <label className="form-check-lable" htmlFor="model">
                <input
                  type="radio"
                  className="form-check-input"
                  onChange={(e) => {
                    setModel(6);
                  }}
                  name="drone"
                  value="6"
                />
                Decision Tree(scikit learn)
              </label>
            </div>
          </section>
        </div>

        <div className="field">
          <h4 className="h4 dark-grey-text mt-5 mb-4">
            Choose The Amucad field(action)
          </h4>
          <section className="border p-3">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(e) => {
                  setField(1);
                }}
                name="field"
                value="1"
              />
              <label className="form-check-lable" htmlFor="amucad">
                Explosion
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(e) => {
                  setField(2);
                }}
                name="field"
                value="2"
              />
              <label className="form-check-lable" htmlFor="amucad">
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
            Train
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainhtmlForm;
