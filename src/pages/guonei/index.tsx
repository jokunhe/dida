import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Input,
  Switch,
} from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { StyledOverView } from "./style";
import Modals from "./modal";
import AddressParse from 'address-parse';


import Jiantou from "../../static/images/my/jiantou.png";
import Warning_circle from "../../static/images/warning-circle.png";
import { ApiPays, PaySearch } from "./api";

const { safeArea } = Taro.getSystemInfoSync();

const Index = (props) => {
  const router = useRouter();

  const isId = router.params.deliveryId
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };

  const { params, dispatch } = props;

  const {
    deliveryType,
    guaranteeValueAmount,
    collectionMoney,
    openid,
  } = params;
  useEffect(() => {
    // console.log(props);

  }, [props]);

  const pay = async () => {
    if (!deliveryType) {
      Taro.showToast({
        title: "请选择物品类型",
        icon: "none",
        duration: 2000,
      });
      return false;
    }
    dispatch({ type: "order/payOrder", isId });
    // const res = await ApiPays({
    //   openid: openid,
    //   totalFee: 0.01,
    // });

    // Taro.requestPayment({
    //   ...res.message,
    //   success: function (r) {
    //     PaySearch({
    //       outTradeNo: res?.message?.outTradeNo,
    //     })
    //       .then((res) => {
    //         if (res) {
    //           dispatch({ type: "order/payOrder" });
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   },
    //   fail: function (err) {
    //     console.log("支付失败---", res);
    //   },
    // });
  };

  return (
    <>
      <StyledOverView>
        <View className="head">
          <View className="section3">
            <View className="layer3s">
              <View className="mod2">
                <Text className="word2">寄</Text>
              </View>
              <View className="main2">
                <Text decode="true" className="txt2">
                  寄件人&nbsp;&nbsp;123****12313
                </Text>
                <Text className="paragraph1">
                  广东省深圳市深圳市南山区留学生 创业大厦1304室
                </Text>
              </View>
              <View className="main3"></View>
              <Text className="info3">地址簿</Text>
            </View>
            <View className="layer2"></View>
            <View className="layer3s">
              <View className="main1">
                <Text className="info2">收</Text>
              </View>
              <View className="main2">
                <Text decode="true" className="txt2">
                  收件人&nbsp;&nbsp;123****12313
                </Text>
                <Text className="paragraph1">
                  广东省深圳市深圳市南山区留学生 创业大厦1304室
                </Text>
              </View>
              <View className="main3"></View>
              <Text className="info3">地址簿</Text>
            </View>
          </View>
        </View>

        <View className="layer3">
          <View className="layer4">
            {/* <View className="item">
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">期望上门时间</Text>
                  <View className="opt">
                    <Text className="blod">今天 2小时内</Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View>

            <View className="item">
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">预计送达时间</Text>
                  <View className="opt">
                    <Text className="input">信息填写完整后显示</Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View> */}

            <View
              className="item"
              onClick={() => {
                console.log(11);
                Taro.navigateTo({
                  url: "/pages/guonei/xinxi/index",
                });
              }}
            >
              <View className="group1-0">
                <View className="mod2-0">
                  <View className="bitian">
                    <Text className="input in-flex">物品信息</Text>&nbsp;&nbsp;
                    <View className="block7-2">
                      <Text className="word6-2">必填</Text>
                    </View>
                  </View>

                  <View className="opt">
                    <Text className="input">
                      {" "}
                      {deliveryType
                        ? deliveryType === 6
                          ? "特快零担"
                          : "特快重货"
                        : "请填写(20KG以上物品)"}
                    </Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View>

            {
              !isId && <View className="item">
                <View className="group1-0">
                  <View className="mod2-0">
                    <Text className="input" style={{ flex: "none" }}>
                      大票直达
                    </Text>
                    <View className="opt" style={{ flex: "none" }}>
                      <Text className="blod">300公斤货物以上适用</Text>&nbsp;
                      &nbsp;
                      <Switch color="#ff7201" />
                    </View>
                  </View>
                </View>
              </View>
            }

            <View className="item">
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">付款方式</Text>
                  <View className="opt">
                    <Text className="blod">寄付现结</Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="layer3">
          <View className="layer4">
            {
              !isId && <View
                className="item"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/guonei/baojia/index",
                  });
                }}
              >
                <View className="group1-0">
                  <View className="mod2-0">
                    <Text className="input">保价</Text>
                    <View className="opt">
                      <Text className="input">
                        {guaranteeValueAmount
                          ? `￥${guaranteeValueAmount}`
                          : "请填写保价信息"}
                      </Text>
                      <Image src={Jiantou} className="jiantou"></Image>
                    </View>
                  </View>
                </View>
              </View>
            }

            <View
              className="item"
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/guonei/zengzhi/index",
                });
              }}
            >
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">增值服务</Text>
                  <View className="opt">
                    <Text className="input">
                      {collectionMoney
                        ? `￥${collectionMoney}`
                        : "包装服务/代收货款"}
                    </Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {
          !isId && <View className="outer8">
            <View className="main4">
              <View className="group4">
                <Text className="txt9">重货上楼</Text>
                <Image src={Warning_circle} className="label6"></Image>
                <Text className="word12">¥</Text>
                <Text className="word13">40</Text>
                &nbsp;&nbsp;
                {/* <View className="block8"></View> */}
                <Switch color="#ff7201" className="zh-sw" />
              </View>
              <View className="group5"></View>
            </View>
            {/* <View className="main5"></View> */}
            <Text decode="true" className="paragraph2">
              整票&lt;&nbsp;50KG，&nbsp;免费，整票&gt;&nbsp;50KG且≤140KG时，固定
              <br />
              40元/票，整票&gt;&nbsp;140KG，0.3元/公斤，&nbsp;(最重件≥100KG
              <br />
              整票不上楼)
            </Text>
          </View>
        }

        <View className="foot">
          <View
            className="outer9"
            onClick={(e) => {
              Taro.navigateTo({
                url: "/pages/freight/suc/index",
              });
              e.stopPropagation();
            }}
          >
            <View className="section4">
              <View className="layer7">
                <View className="layer8">
                  <Text className="info3">预估费用</Text>
                  <View className="block9">
                    <Text className="word14">¥</Text>
                    <Text className="info4">23</Text>
                  </View>
                </View>
                <View className="layer9">
                  {/* <Image
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7a499fe45eed64ab25c974fecf15c70d576d564de3843223ef9dc9c37df903e5"
                    className="label7"
                  ></Image> */}
                  <Text className="word15">阅读并同意《货运服务协议》</Text>
                </View>
              </View>
              <Text
                className="word16"
                onClick={(e) => {
                  pay();
                  e.stopPropagation();
                }}
              >
                下单
              </Text>
            </View>
          </View>
        </View>
      </StyledOverView>
      {/* 重货上楼 */}
      {/* <Modals
        title={'重货上楼'}
        text={`嘀嗒物流承运货物是，当单票货物重量50KG&nbsp;(含)\n以下，嘀嗒物流提供免费上楼服务。当单票货物\n重量50KG以上，且货物最长边小于2米(含)\n提供收费送货上楼服务\n服务特性:\n专业团队保障，为客户提供便利的上楼服务，计\n费简单，全网统一\n服务范围:\n中国内地地区互寄\n收费标准:\n中国内地地区互寄:\n重货上楼服务费=货物重量*标准费率\n重货产品:单件100KG以内，且货物最长边小于\n2米(含),整单免费上楼，反之整票不上楼\n零担产品：当单票货物重量50KG`}
      ></Modals> */}

      {/* <Modals
        title={'重货上楼'}
        text={`零担产品：当单票货物重量50KG(含)以下，嘀嗒\n物流提供免费上楼服务。当单票货物重量50KG\n以上，且货物最长边小于2米(含)，提供收费送货\n上楼服务\n注:以.上仅供参考，具体以当地嘀嗒销售人员报\n价为准`}
      ></Modals> */}
    </>
  );
};

export default connect(({ order }: any) => {
  return {
    ...order,
  };
})(Index);
