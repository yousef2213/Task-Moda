import React, { Component } from "react";

const TemplateContext = React.createContext();

class TemplateProvider extends Component {
  state = {
    OpacityBar: false,
    OpenDash : false,
    LoginDashboardQafeer: false,
    User: {}
  };




  OpenSidebar = (e) => {
    let navBar = document.querySelector(".nav-bar-backGround");
    let Icondiv = document.querySelector(".icon-div");
    navBar.classList.add("addWidth");
    Icondiv.classList.add("addNone");
  };
  CloseSidebar = () => {
    let navBar = document.querySelector(".nav-bar-backGround");
    let Icondiv = document.querySelector(".icon-div");
    navBar.classList.remove("addWidth");
    Icondiv.classList.remove("addNone");
  };
  



  render() {
    return (
      <TemplateContext.Provider
        value={{
          ...this.state,
          ChangeColor: this.ChangeColor,
          ChangeSetting: this.ChangeSetting,
          OpenSidebar: this.OpenSidebar,
          CloseSidebar: this.CloseSidebar,
          LoginIn: this.LoginIn,
          LoginOut: this.LoginOut
        }}
      >
        {this.props.children}
      </TemplateContext.Provider>
    );
  }
}

const TemplateConsumer = TemplateContext.Consumer;

export { TemplateContext, TemplateConsumer, TemplateProvider };
