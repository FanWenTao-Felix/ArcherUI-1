import Mock from 'mockjs'

const top = [{
  label: "首页",
  path: "/wel/index",
  icon: 'el-icon-menu',
  meta: {
    i18n: 'dashboard',
  },
  parentId: 0
},
  {
    label: "BladeX官网",
    icon: 'el-icon-document',
    meta: {
      i18n: 'bladex',
    },
    path: "https://bladex.vip",
    parentId: 1
  },
  {
    label: "BladeX社区",
    icon: 'el-icon-document',
    meta: {
      i18n: 'sns',
    },
    path: "https://sns.bladex.vip",
    parentId: 2
  }]
export default ({mock}) => {
  if (!mock) return;
  Mock.mock('/user/getTopMenu', 'get', () => {
    return {
      data: top
    }
  })

}
