import { Component } from "react";

import Banner from "../components/Banner";
import InitForm from "../components/InitForm";

const styles = {
  row:{
    display: "flex"
  }
};

class Login extends Component {
  render() {
    return (
      <div className="row" style={styles.row}>
        <Banner/>
        <InitForm/>
      </div>
    );
  }
}

export default Login;