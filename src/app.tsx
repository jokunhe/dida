import React from "react";
import { Provider } from "react-redux";
import dva from "./utils/dva";
import models from "./models";
import Taro from "@tarojs/taro";
import { login } from "./pages/login/api";

import "./app.scss";

export const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  // enableLog: process.env.NODE_ENV !== 'production'
  enableLog: false,
});
export const store = dvaApp.getStore();

export const getApp = () => dvaApp;

Taro.getDvaApp = getApp;
Taro.dvaApp = dvaApp;

class App extends React.Component {
  onLaunch() {
    //

    // 登录
    Taro.login({
      success: function (res) {
        console.log("code为：", res.code);
        if (res.code) {
          Taro.request({
            url: "http://159.75.52.36/prod-api/jsapi/login",
            data: {
              code: res.code,
              wxUserVo: {
                gender: 0,
                parentOpenid: "",
                userId: 1817,
                smallSource: 0,
              },
            },
            method: "POST",
            header: {
              "content-type": "application/json",
            },
            success: function (res) {
              var openid = res.data.openid;
              Taro.getUserInfo({
                success: (res) => {
                  // 保存用户信息到服务端
                  Taro.request({
                    // url: "http://localhost:8080/wx/getUserInfo",
                    url: "http://159.75.52.36/prod-api/jsapi/getUserInfo",
                    data: {
                      userInfo: res.userInfo,
                      openid: openid,
                    },
                    method: "POST",
                    header: {
                      "content-type": "application/json",
                    },
                    success: function (res) {
                      console.log("success----", res.data.data);
                      Taro.setStorageSync("user", res.data.data);
                    },
                    fail: function (error) {
                      console.log(error);
                    },
                  });
                },
              });
            },
            fail: function (error) {
              console.log(error);
            },
          });
        } else {
          console.log("error code " + res.errMsg);
        }
      },
    });
  }

  componentDidMount() {
    // wx.onAppRoute(function(res) {
    //   Taro.eventCenter.trigger("userCenterHide");
    // });
    // console.log(Taro.getMenuButtonBoundingClientRect());
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
