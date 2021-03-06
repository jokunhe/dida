import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .bd1 {
  z-index: 2;
  height: 484rpx;
  background: url('../../../static/images/my/pic_bg_2.png') 100% no-repeat;
  background-size: 100% 484rpx;
  width: 750rpx;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 4rpx 0 0 20rpx;
}
.main1 {
  z-index: auto;
  width: 696rpx;
  height: 278rpx;
  display: flex;
  flex-direction: column;
}
.box1 {
  z-index: auto;
  width: 680rpx;
  height: 42rpx;
  margin-left: 16rpx;
  flex-direction: row;
  display: flex;
}
.word1 {
  z-index: 72;
  width: 108rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 30rpx;
  letter-spacing: -1rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: center;
}
.icon1 {
  z-index: 67;
  width: 34rpx;
  height: 22rpx;
  margin: 8rpx 0 0 438rpx;
}
.mod2 {
  z-index: 63;
  width: 32rpx;
  height: 22rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng844e2577a5d293008bc4c73d8eff6816403b8c9c20a53b2b16a20e293a52d5c0) 0rpx 0rpx no-repeat;
  background-size: 32rpx 24rpx;
  display: flex;
  flex-direction: column;
  margin: 8rpx 0 0 10rpx;
}
.icon2 {
  z-index: 59;
  width: 50rpx;
  height: 24rpx;
  margin: 6rpx 0 0 8rpx;
}
.box2 {
  z-index: auto;
  width: 696rpx;
  height: 54rpx;
  margin-top: 14rpx;
  flex-direction: row;
  display: flex;
}
.icon3 {
  z-index: 50;
  width: 48rpx;
  height: 48rpx;
  margin-top: 6rpx;
}
.word2 {
  z-index: 47;
  width: 72rpx;
  height: 50rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 36rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 50rpx;
  text-align: left;
  margin: 2rpx 0 0 10rpx;
}
.section1 {
  z-index: 73;
  width: 156rpx;
  height: 54rpx;
  border-radius: NaNrpx;
  background-color: rgba(0,0,0,0.1);
  margin-left: 410rpx;
  display: flex;
  flex-direction: column;
}
.box3 {
  z-index: auto;
  width: 300rpx;
  height: 66rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin: 38rpx 0 0 206rpx;
}
.icon4 {
  z-index: 53;
  width: 48rpx;
  height: 48rpx;
  margin-top: 10rpx;
}
.word3 {
  z-index: 48;
  width: 240rpx;
  height: 66rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 48rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 66rpx;
  text-align: left;
}
.word4 {
  z-index: 49;
  width: 474rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(238,238,238,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  align-self: flex-end;
  margin: 24rpx 104rpx 0 0;
}


.mod3 {
  z-index: 8;
  height: 392rpx;
  border-radius: 20rpx;
  background-color: rgba(255,255,255,1);
  width: 702rpx;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 24rpx;
  top: 322rpx;
  display: flex;
  flex-direction: column;
}
.layer2 {
  z-index: auto;
  width: 646rpx;
  height: 312rpx;
  display: flex;
  flex-direction: column;
}
.group1 {
  z-index: auto;
  width: 620rpx;
  height: 132rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.mod4 {
  z-index: 11;
  height: 72rpx;
  border-radius: 100%;
  background: #FE9F0C;
  width: 72rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.word5 {
  z-index: 13;
  width: 38rpx;
  height: 52rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 38rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 52rpx;
  text-align: left;
}
.mod5 {
  z-index: auto;
  width: 532rpx;
  height: 128rpx;
  margin-top: 4rpx;
  display: flex;
  flex-direction: column;
}
.info1 {
  z-index: 15;
  width: 300rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  align-self: flex-start;
}
.infoBox1 {
  z-index: 17;
  width: 532rpx;
  height: 80rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(153,153,153,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  line-height: 40rpx;
  text-align: left;
  margin-top: 6rpx;
  overflow: hidden;
  text-overflow: ellipsis;
}
.group2 {
  z-index: 9;
  width: 646rpx;
  height: 2rpx;
  border-bottom: 2rpx solid #F3F3F3;
  margin-top: 24rpx;
  display: flex;
  flex-direction: column;
}
.group3 {
  z-index: auto;
  width: 620rpx;
  height: 132rpx;
  margin-top: 22rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.mod6 {
  z-index: 12;
  height: 72rpx;
  border-radius: 100%;
  background: #FF7201;
  width: 72rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.word6 {
  z-index: 14;
  width: 38rpx;
  height: 52rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 38rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 52rpx;
  text-align: left;
}
.mod7 {
  z-index: auto;
  width: 532rpx;
  height: 128rpx;
  margin-top: 4rpx;
  display: flex;
  flex-direction: column;
}
.word7 {
  z-index: 16;
  width: 300rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  align-self: flex-start;
}
.paragraph1 {
  z-index: 10;
  width: 532rpx;
  height: 80rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(153,153,153,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  line-height: 40rpx;
  text-align: left;
  margin-top: 6rpx;
  overflow: hidden;
  text-overflow: ellipsis;
}


.bd2 {
  z-index: 19;
  height: 80rpx;
  border-radius: 20rpx;
  background-color: rgba(255,255,255,1);
  align-self: center;
  margin-top: 246rpx;
  width: 702rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.layer1 {
  z-index: auto;
  width: 620rpx;
  height: 40rpx;
  flex-direction: row;
  display: flex;
}
.label1 {
  z-index: 20;
  width: 32rpx;
  height: 32rpx;
  margin-top: 4rpx;
}
.txt1 {
  z-index: 44;
  width: 112rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-left: 8rpx;
}
.label2 {
  z-index: 30;
  width: 32rpx;
  height: 32rpx;
  margin: 4rpx 0 0 84rpx;
}
.txt2 {
  z-index: 45;
  width: 112rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-left: 8rpx;
}
.icon5 {
  z-index: 37;
  width: 32rpx;
  height: 32rpx;
  margin: 4rpx 0 0 80rpx;
}
.txt3 {
  z-index: 46;
  width: 112rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-left: 8rpx;
}
  
`

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
