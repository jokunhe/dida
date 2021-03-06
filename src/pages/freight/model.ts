import { Reducer } from "redux";
import { Model } from "dva";
import { OrderList } from "./api";
import Taro from "@tarojs/taro";

interface StateType {
  params: Record<string, unknown>;
}
export interface ConnectState {
  waybill: StateType;
}

interface ModelType {
  namespace: string;
  state: StateType;
  effects: {};
  reducers: {
    save: Reducer;
  };
}

const user = Taro.getStorageSync("user");

const model: Model & ModelType = {
  namespace: "freight",
  state: {
    params: {
      userId: user.userId,
      openid: user.openid,
      deliveryId: "",
    },
    list: [],
  },
  effects: {
    *orderList({}, { put, select }) {
      let freight = yield select((state) => state.freight);
      const res = yield OrderList(freight.params);
      if (res) {
        yield put({
          type: "setList",
          payload: res.rows,
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        params: {
          ...state.params,
          ...payload,
        },
      };
    },
    setList(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },
  },
};

export default model;
