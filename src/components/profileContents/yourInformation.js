import "./css/yourInformation.css";
const YourInformation = () => {
  return (
    <div>
      <h1 className="personal_info">
        This is your information from the start of your journey
      </h1>
      <div className="bmi_container">
        <div className="col-4 bmi_information">
          <h2>initial BMI</h2>
          <div className="weight_section">
            <p>Weight:</p>
            <p>81kg</p>
          </div>
          <div className="bmi_section">
            <p>BMI:</p>
            <p>27.1</p>
          </div>
          <div className="bmi_Category">
            <p>BMI Category:</p>
            <p style={{ color: "#bc3908" }}>Overweight</p>
          </div>
        </div>

        <div className="col-4 bmi_information">
          <h2>Current BMI</h2>
          <div className="weight_section">
            <p>Weight:</p>
            <p>75kg</p>
          </div>
          <div className="bmi_section">
            <p>BMI:</p>
            <p>25.1</p>
          </div>
          <div className="bmi_Category">
            <p>BMI Category:</p>
            <p style={{ color: "#bc3908" }}>Overweight</p>
          </div>
        </div>

        <div className="col-4 bmi_information">
          <h2>goal BMI</h2>
          <div className="weight_section">
            <p>Weight:</p>
            <p>70kg</p>
          </div>
          <div className="bmi_section">
            <p>BMI:</p>
            <p>23.4</p>
          </div>
          <div className="bmi_Category">
            <p>BMI Category:</p>
            <p style={{color: "green"}}>Normal Weight</p>
          </div>
        </div>
      </div>
      <div className="line_graph">
        <ul className="point_container">
          <li className="point1" id="points"></li>
          <li className="point2" id="points"></li>
          <li className="point3" id="points"></li>
          <li className="point4" id="points"></li>
          <li className="point5" id="points"></li>
          <li className="point6" id="points"></li>
          <li className="point7" id="points"></li>
          <li className="point8" id="points"></li>

          <div className="x_axis_container">
            <ul className="x_axis_label">
              <li className="label_1">90 Kg</li>
              <li className="label_2">85 Kg</li>
              <li className="label_3">80 Kg</li>
              <li className="label_4">75 Kg</li>
              <li className="label_5">70 Kg</li>
            </ul>
            <div className="x_axis_wrapper">
              <div className="x_axis"></div>
              <div className="x_axis"></div>
              <div className="x_axis"></div>
              <div className="x_axis"></div>
              <div className="x_axis"></div>
            </div>
          </div>
          <ul className="y_axis_label">
            <li className="week1">1</li>
            <li className="week2">2</li>
            <li className="week3">3</li>
            <li className="week4">4</li>
            <li className="week5">5</li>
            <li className="week6">6</li>
            <li className="week7">7</li>
            <li className="week8">8</li>
            <li className="week9">9</li>
            <li className="week10">10</li>
          </ul>
        </ul>
        <section className="numberOfWeeks">
          <p>Weeks</p>
        </section>
      </div>
    </div>
  );
};

export default YourInformation;
