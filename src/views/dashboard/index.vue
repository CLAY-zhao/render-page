<template>
  <div class="index">
    <n-page-header subtitle="实时关注热点消息">
      <n-grid :cols="5">
        <n-gi>
          <n-statistic label="百度" value="125 集" />
        </n-gi>
        <n-gi>
          <n-statistic label="小红书" value="22 位" />
        </n-gi>
        <n-gi>
          <n-statistic label="抖音" value="36 次" />
        </n-gi>
        <n-gi>
          <n-statistic label="快手" value="83 个" />
        </n-gi>
        <n-gi>
          <n-statistic label="bilibili" value="2,346 个" />
        </n-gi>
      </n-grid>
      <template #title>
        <span style="text-decoration: none; color: inherit">
          Any hot.Hello?
        </span>
      </template>
      <template #header>
        <n-breadcrumb>
          <n-breadcrumb-item>首页 / Dashboard</n-breadcrumb-item>
        </n-breadcrumb>
      </template>
      <template #avatar>
        <n-icon size="40">
          <FireFilledIcon style="color: rgba(192, 57, 43, 1.0);" />
        </n-icon>
      </template>
      <template #extra>
        <n-space>
          <n-button>刷新</n-button>
          <n-dropdown :options="options" placement="bottom-start">
            <n-button :bordered="false" style="padding: 0 4px">
              ···
            </n-button>
          </n-dropdown>
        </n-space>
      </template>
      <template #footer>
        截止到 <span style="color: rgba(52, 152, 219, .9);">{{ currentDate }}</span>
      </template>
    </n-page-header>
    <n-divider title-placement="center">详细数据</n-divider>
    <div class="content">
      <n-grid x-gap="12" :cols="2">
        <n-gi>
          <div class="item">
            <n-card>百度</n-card>
            <n-list hoverable clickable v-for="i of 6" :key="i">
              <n-list-item>
                <n-image
                  width="100"
                  src="https://fyb-2.cdn.bcebos.com/hotboard_image/f97c58d15c8f0ebeed9881d531460666?x-bce-process=image/resize,m_fill,w_256,h_170"
                />
                <n-thing title="合作共赢是中美共同努力的方向" content-style="margin-top: 10px;">
                  <template #description>
                    <n-space size="small" style="margin-top: 4px">
                      <n-tag :bordered="false" type="info" size="small">
                        暑夜
                      </n-tag>
                    </n-space>
                  </template>
                  <n-ellipsis style="max-width: 600px">
                    当地时间11月15日，国家主席习近平在美国旧金山同美国总统拜登举行中美元首会晤。会议指出，相互尊重、和平共处、合作共赢是中美共同努力的方向。
                  </n-ellipsis>
                </n-thing>
              </n-list-item>
            </n-list>
          </div>
        </n-gi>
        <n-gi>
          <div class="item">
            <n-card>小红书</n-card>
            <n-list hoverable clickable v-for="i of 6" :key="i">
              <n-list-item>
                <n-image
                  width="100"
                  src="https://fyb-2.cdn.bcebos.com/hotboard_image/f97c58d15c8f0ebeed9881d531460666?x-bce-process=image/resize,m_fill,w_256,h_170"
                />
                <n-thing title="合作共赢是中美共同努力的方向" content-style="margin-top: 10px;">
                  <template #description>
                    <n-space size="small" style="margin-top: 4px">
                      <n-tag :bordered="false" type="info" size="small">
                        暑夜
                      </n-tag>
                    </n-space>
                  </template>
                  <n-ellipsis style="max-width: 600px">
                    当地时间11月15日，国家主席习近平在美国旧金山同美国总统拜登举行中美元首会晤。会议指出，相互尊重、和平共处、合作共赢是中美共同努力的方向。
                  </n-ellipsis>
                </n-thing>
              </n-list-item>
            </n-list>
          </div>
        </n-gi>
        <n-gi>
          <div class="item">

          </div>
        </n-gi>
        <n-gi>
          <div class="item">

          </div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useMessage } from 'naive-ui'
import { FireFilled as FireFilledIcon } from '@vicons/antd'
export default {
  name: 'dashboard',
  components: {
    FireFilledIcon
  },
  setup () {
    const message = useMessage()
    const currentDate = ref('')
    const getCurrentDate = () => {
      const today = new Date()
      currentDate.value = today.toLocaleDateString(
        'zh-CN',
        {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }
      ).replace(/[年月]/g, ' ').replace(/日/g, '')
    }
    onMounted(() => {
      getCurrentDate()
    })
    return {
      handleBack () {
        message.info("[onBack]")
      },
      options: [
        { label: "催更", key: "1" },
        { label: "催更", key: "2" },
        { label: "催更", key: "3" }
      ],
      currentDate
    }
  }
}
</script>

<style scoped>
.content .item {
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  border-radius: 10px;
}
.n-thing {
  display: inline-block;
  margin-left: 20px;
}

.content .item::-webkit-scrollbar{
  width: 4px;
}
.content .item::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}
.content .item::-webkit-scrollbar-corner {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
