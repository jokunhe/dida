
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input, Switch } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { StyledOverView } from './style'
import Modals from '../modal'

import Warning_circle from '../../../static/images/warning-circle.png'



const { safeArea } = Taro.getSystemInfoSync()




const Index = props => {
  const [current, setCurrent] = useState(0)
  const setCurrentSwiper = current => {
    setCurrent(current)
  }
  const { overView, dispatch } = props


  useEffect(() => {
    // dispatch({ type: 'waybill/getDefault' })
    // // 监听时区变化
    // Taro.eventCenter.on('timeZoneOnChange', arg => {
    //   dispatch({ type: 'waybill/getDefault' })
    // })
    // Taro.showShareMenu({
    //   withShareTicket: true,
    // })
  }, [dispatch])

  return (

    <>
      <StyledOverView>
        <View className="group2">
          <View className="mod2">
            <View className="box1">
              <Text lines="1" className="txt1">包装服务</Text>
              {/* <View className="box2"></View> */}
              <Switch color="#ff7201" />
            </View>
            <Text lines="1" className="word1">抗震、减压、缓冲等专业包装</Text>
            <View className="box3"></View>
            <Text lines="1" className="word2">包装明细</Text>
            <Text lines="1" className="infoBox1">包装需额外收费，以下信息仅供参考，实际服务情况请以&nbsp;当地营业网点情况为准</Text>
            <Text lines="1" className="word3">纸箱</Text>
            <View className="box4">
              <Text lines="1" className="info3">名称</Text>
              <Text lines="1" className="info4">尺寸(cm）</Text>
              <Text lines="1" className="word4">收费标准</Text>
            </View>
            <View className="box5">
              <Text lines="1" className="word5">1号纸箱</Text>
              <Text lines="1" className="txt2">20*18*10</Text>
              <Text lines="1" className="word6">1元/个</Text>
            </View>
            <View className="box6">
              <Text lines="1" className="txt3">2号纸箱</Text>
              <Text lines="1" className="word7">30*23*23</Text>
              <Text lines="1" className="info5">3元/个</Text>
            </View>
            <View className="box7">
              <Text lines="1" className="txt4">3号纸箱</Text>
              <Text lines="1" className="word8">46*28*33</Text>
              <Text lines="1" className="word9">5元/个</Text>
            </View>
            <View className="box8">
              <Text lines="1" className="info6">4号纸箱</Text>
              <Text lines="1" className="txt5">50*32*54</Text>
              <Text lines="1" className="info7">10元/个</Text>
            </View>
            <View className="box9">
              <Text lines="1" className="word10">5号纸箱</Text>
              <Text lines="1" className="txt6">60*50*40</Text>
              <Text lines="1" className="txt7">15元/个</Text>
            </View>
            <Text lines="1" className="info8">编织袋</Text>
            <View className="box10">
              <Text lines="1" className="word11">名称</Text>
              <Text lines="1" className="word12">尺寸(cm）</Text>
              <Text lines="1" className="info9">收费标准</Text>
            </View>
            <View className="box11">
              <Text lines="1" className="info10">白色1号</Text>
              <Text lines="1" className="word13">150*120</Text>
              <Text lines="1" className="word14">10元/个</Text>
            </View>
            <View className="box12">
              <Text lines="1" className="info11">白色2号</Text>
              <Text lines="1" className="word15">120*100</Text>
              <Text lines="1" className="word16">8元/个</Text>
            </View>
            <View className="box13">
              <Text lines="1" className="txt8">白色3号</Text>
              <Text lines="1" className="txt9">100*80</Text>
              <Text lines="1" className="word17">5元/个</Text>
            </View>
            <View className="box14">
              <Text lines="1" className="word18">白色4号</Text>
              <Text lines="1" className="word19">80*60</Text>
              <Text lines="1" className="info12">3元/个</Text>
            </View>
            <Text lines="1" className="info13">打木箱</Text>
            <View className="box15">
              <Text lines="1" className="word20">名称</Text>
              <Text lines="1" className="word21">尺寸(cm）</Text>
              <Text lines="1" className="word22">收费标准</Text>
            </View>
            <View className="box16">
              <Text lines="1" className="word23">木箱</Text>
              <Text lines="1" className="infoBox2">计费体积=长*高*宽&nbsp;(cm)*1.4(系数)</Text>
              <Text lines="1" className="paragraph1">200元/方&nbsp;最低40元/票</Text>
            </View>
            <Text lines="1" className="info14">木托盘</Text>
            <View className="box17">
              <Text lines="1" className="txt10">名称</Text>
              <Text lines="1" className="word24">尺寸(cm）</Text>
              <Text lines="1" className="word25">收费标准</Text>
            </View>
            <View className="box18">
              <Text lines="1" className="word26">标准托盘</Text>
              <Text lines="1" className="txt11">120*100(长*宽)</Text>
              <Text lines="1" className="word27">60元/块</Text>
            </View>
            <Text lines="1" className="word28">缓冲物</Text>
            <View className="box19">
              <Text lines="1" className="txt12">名称</Text>
              <Text lines="1" className="word29">尺寸(cm）</Text>
              <Text lines="1" className="txt13">收费标准</Text>
            </View>
            <View className="box20">
              <Text lines="1" className="word30">缠绕膜</Text>
              <Text lines="1" className="txt14">100*100*1</Text>
              <Text lines="1" className="infoBox3">50元/方&nbsp;最低10元/票</Text>
            </View>
            <View className="box21">
              <Text lines="1" className="txt15">气泡膜</Text>
              <Text lines="1" className="word31">100*100*1</Text>
              <Text lines="1" className="word32">2.5元/米</Text>
            </View>
            <View className="box22">
              <Text lines="1" className="txt16">珍珠棉</Text>
              <Text lines="1" className="txt17">100*100*1</Text>
              <Text lines="1" className="word33">10元/张</Text>
            </View>
          </View>
         
        </View>

        <View className="group3">
          <View className="bd3">
            <View className="layer3">
              <Text lines="1" className="txt18">代收货款</Text>
              <Image src={Warning_circle} className="icon3"></Image>
              <Switch color="#ff7201" />
              {/* <View className="section1"></View> */}
            </View>
            <Text lines="1" className="infoBox4">签收成功后并且到返款时间后，货款会直接返款到您的账 户里</Text>
            <View className="layer4"></View>
            <View className="layer5">
              <Text lines="1" className="word34">代收金额</Text>
              {/* <View className="group4">
                <Text lines="1" className="word35">请输入代收还款金额(1-10万元以内)</Text>
              </View> */}
              <Input className="group4" type='text' placeholder={`请输入代收还款金额(1-10万元以内)`}/>
            </View>
          </View>
         
        </View>

        <View className="foot">
          <View className="box7s">
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7a499fe45eed64ab25c974fecf15c70d576d564de3843223ef9dc9c37df903e5" className="icon4"></Image>
            <Text lines="1" className="info1">我已阅读并同意《代收货服务协议》</Text>
          </View>
          <Button bindtap="onClick" className="box8s">
            <Text lines="1" decode="true" className="info2">确&nbsp;定</Text>
          </Button>
        </View>
      </StyledOverView>

      {/* 代收货款 */}
      {/* <Modals
        title={'代收货款'}
        Text={`嘀嗒物流按照托运客户(卖方)与收件客户(买方)\n达成的交易协议，向收件客户收取货款，并按\n照约定时间将货款返至托运客户指定账户的服\n务。双方对账完成后进行返款，如遇节假日返\n款时间顺延。大票直达、整车直达不适用代收\n货款服务.\n服务特性:\n支持T+0、T+1、&nbsp;T+3多种返款方式，单票代收\n最高支持100万元，进行支付现金、POS机刷卡、\n微信等多种付款方式。\n服务范围:\n中国内地地区互寄\n收费标准:\n中国内地地区互寄:\n代收货款服务费=代收金额*标准费率`}
      ></Modals> */}


      {/* <Modals
        title={'代收货款'}
        Text={`收费标准:\n中国内地地区互寄:\n代收货款服务费=代收金额*标准费率\nT+0:代收手续费1.5%，最低一票25元，最高一\n票350元;\nT+1:代收手续费1.2%，最低一票15元，最高一\n票200元;\nT+3:代收手续费0.8%，最低一票5元，最高一\n票150元;\n注:以上仅供参考，具体以当地嘀嗒销售人员报\n价为准\n`}
      ></Modals> */}
    </>
  )
}

export default Index
