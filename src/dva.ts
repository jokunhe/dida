/*
 * @Date: 2022-04-01 21:43:21
 * @LastEditors: Jokun
 * @LastEditTime: 2022-04-04 14:16:37
 * @FilePath: \dida\src\dva.ts
 */
import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app, store, dispatch, registered

function createApp(opt) {
  // redux日志
  opt.onAction = []
  // if (opt.enableLog) {
  opt.onAction.push(createLogger())
  // }
  app = create(opt)
  app.use(createLoading())



  // 注入model
  if (!registered) {
    opt.models.forEach(model => app.model(model))
  }
  registered = true
  app.start()

  // 设置store
  store = app._store
  app.getStore = () => store
  app.use({
    onError(err) {
      console.log(err)
    },
  })

  // 设置dispatch
  dispatch = store.dispatch
  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  },
}
