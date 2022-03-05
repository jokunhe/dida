


import { Text, View, Image, ScrollView, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtInput, AtIcon } from 'taro-ui'

import { StyledOverView } from './style'
import Quxiao from '../../../static/images/yundan/icon_quxiao.png'
import Xiugai from '../../../static/images/yundan/icon_xiugai.png'

import Navbar from '@/components/navbar'

const { safeArea } = Taro.getSystemInfoSync()
const {height} =  Taro.getMenuButtonBoundingClientRect()

const WayBillDatails = props => {
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
        <StyledOverView>
            <ScrollView
                scrollY={true}
                className={'scrollview'}
            >
                <View className="section1">
                    <Navbar></Navbar>
                    <View className="main2s" style={{height: `${height}px`,alignItems: 'center'}}>
                        {/* <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng264c18d51b5f751eed7b7c217f1a4539ba96e0f4d7e2c645b3942c7ade4c0ba7" className="label2"></Image> */}
                        <AtIcon value='chevron-LEFT' size='30' color='#FFF' className="label2"></AtIcon>
                        <Text lines="1" className="info2">运单详情</Text>
                    </View>
                    <View className="main3">
                        <Text lines="1" className="txt1">某某某</Text>
                        <Text lines="1" className="word1">待取件</Text>
                        <Text lines="1" className="word2">某某某</Text>
                    </View>
                    <View className="main4">
                        <Text lines="1" className="info3">深圳市</Text>
                        <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6f988cf86efc9efa12167ecb77d6c598173d9af90d2b7520dabb8e6edc8eaedf" className="pic1"></Image>
                        <Text lines="1" className="info3">深圳市</Text>
                    </View>
                    <View className="main5">
                        <Text lines="1" className="info5s">运单号：1234243243</Text>
                        <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc5c5548cf42781c6f76f016c0c7b9ece38c882121a20076f05eb9431e8a73c7b" className="icon2"></Image>
                    </View>
                    <View className="main6">
                        <Text lines="1" decode="true" className="info5s">下单时间：2021-09-09&nbsp;&nbsp;17:04:23</Text>
                    </View>
                </View>


                <View className="box4">
                    <View className="mod3">
                        <Text lines="1" className="word14">运单信息</Text>
                    </View>

                    {/* 列表 */}

                    <View className="mod5">
                        <View className="mod6">

                            <Text lines="1" className="info15">已签收</Text>
                        </View>
                        <View className="mod7">
                            <View className="section8">

                            </View>
                            <View className="section9"></View>
                            {/* <View className="box5">
                                <Text lines="1" className="info16">收</Text>
                            </View> */}

                        </View>
                        <View className="mod8">
                            <Text lines="1" decode="true" className="word20">2021-09-09&nbsp;17:06:22</Text>
                            <Text lines="1" className="word18">运单已签收</Text>
                        </View>
                    </View>

                    <View className="mod5">
                        <View className="mod6">

                            <Text lines="1" className="word16">派件中</Text>
                        </View>
                        <View className="mod7">
                            <View className="section8">

                            </View>
                            <View className="section9"></View>

                        </View>
                        <View className="mod8">
                            <Text lines="1" decode="true" className="word20">2021-09-09&nbsp;17:06:22</Text>
                            <Text className="word18">货物交给某某某，正在派件途中(联系电话:&nbsp; 1231234567，总件数:&nbsp;1件)</Text>
                        </View>
                    </View>

                    <View className="mod5">
                        <View className="mod6">

                            <Text lines="1" className="word16">运输中</Text>
                        </View>
                        <View className="mod7">
                            <View className="section8">

                            </View>
                            <View className="section9"></View>

                        </View>
                        <View className="mod8">
                            <Text lines="1" decode="true" className="word20">2021-09-09&nbsp;17:06:22</Text>
                            <Text lines="1" className="word18">货物已发车</Text>
                        </View>
                    </View>

                    <View className="mod5">
                        <View className="mod6">

                            <Text lines="1" className="word16">待取件</Text>
                        </View>
                        <View className="mod7">


                            <View className="main2">
                                <Text className="1" className="info18">寄</Text>
                            </View>
                        </View>
                        <View className="mod8">
                            <Text lines="1" decode="true" className="word20">2021-09-09&nbsp;17:06:22</Text>
                            <Text lines="1" className="word18">运单已创建</Text>
                        </View>
                    </View>


                </View>


                <View className="bd2">
                    <View className="block2">
                        <Text lines="1" className="info4">订单信息</Text>
                        <View className="group1">
                            <View className="box2">
                                <Text lines="1" className="txt2">寄</Text>
                            </View>
                            <View className="box3">
                                <Text lines="1" decode="true" className="word6">寄件人&nbsp;&nbsp;123****12313</Text>
                                <Text lines="1" className="paragraph1">广东省深圳市深圳市南山区留学生创业大厦 1304室</Text>
                            </View>
                        </View>
                        <View className="group2">
                            <View className="layer1">
                                <Text lines="1" className="info5">收</Text>
                            </View>
                            <View className="layer2">
                                <Text lines="1" decode="true" className="info6">收件人&nbsp;&nbsp;123****12313</Text>
                                <Text lines="1" className="infoBox1">广东省深圳市深圳市南山区留学生创业大厦 1304室</Text>
                            </View>
                        </View>

                        <View className="group12">
                            <Text lines="1" className="info13">预估费用</Text>
                            <Text lines="1" className="infoBox2">199.00元</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">保险费用</Text>
                            <Text lines="1" className="infoBox2">100.00元</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">包装费用</Text>
                            <Text lines="1" className="infoBox2">10.00元</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">费用合计&nbsp;</Text>
                            <Text lines="1" className="infoBox2">309.00元</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">支付方式</Text>
                            <Text lines="1" className="infoBox2">寄付现结</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">时效类型</Text>
                            <Text lines="1" className="infoBox2">特快重货</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">物品信息</Text>
                            <Text lines="1" className="infoBox2">服装/59KG/10m3/1件/轻拿 轻放</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">京东称重</Text>
                            <Text lines="1" className="infoBox2">服装/59KG/10m3/1件</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">保价金额</Text>
                            <Text lines="1" className="infoBox2">000.00元</Text>
                        </View>
                        <View className="group12">
                            <Text lines="1" className="info13">增值服务</Text>
                            <Text lines="1" className="infoBox2">签单返还;代收货款，代收金 额:10000.00元</Text>
                        </View>
                    </View>
                </View>

                <View className="section4">
                    <View className="block3">
                        <View className="bd8" onClick={() => {
                            Taro.navigateTo({
                                url: '/pages/freight/edit/index',
                            })
                        }}>
                            <Image src={Xiugai} className="icon3"></Image>
                            <Text lines="1" className="txt6">修改运单</Text>
                        </View>
                        <View className="bd9" onClick={() => {
                            Taro.navigateTo({
                                url: '/pages/freight/clear/index',
                            })
                        }}>
                            <Image src={Quxiao} className="label3"></Image>
                            <Text lines="1" className="word10">取消运单</Text>
                        </View>
                        <Button bindtap="onClick" className="bd10">
                            <Text lines="1" className="info9">分享</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>

        </StyledOverView>
    )
}

export default WayBillDatails
