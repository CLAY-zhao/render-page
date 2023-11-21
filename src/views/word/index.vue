<template>
  <div class="index">
    <n-card title="WORD文件上传">
      <n-upload directory-dnd action="#" :max="1" :custom-request="customRequest">
        <n-upload-dragger>
          <div style="margin-bottom: 12px">
            <n-icon size="48" :depth="3">
              <FileWordOutIcon />
            </n-icon>
          </div>
          <n-text style="font-size: 16px">
            点击或者拖动文件到该区域来上传
          </n-text>
          <n-p depth="3" style="margin: 8px 0 0 0">
            请不要上传敏感数据, 比如你的银行卡号和密码, 信用卡号有效期和安全码等
          </n-p>
        </n-upload-dragger>
      </n-upload>
    </n-card>
    <div class="empty" v-if="!uploader">
      <n-empty description="请先上传word文件" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { FileWordOutlined as FileWordOutIcon } from '@vicons/antd'
export default {
  name: 'word',
  components: {
    FileWordOutIcon
  },
  setup() {
    const customRequest = ({
      file, data
    }) => {
      const formData = new FormData()
      if (data) {
        Object.keys(data).forEach(key => {
          formData.append(key, data[key])
        })
      }
      formData.append(file.name, file.file)
      // https://www.naiveui.com/zh-CN/os-theme/components/upload#custom-request.vue
    }
    return {
      uploader: ref(false),
      customRequest
    }
  }
}
</script>

<style scoped>
.empty {
  margin: 50px 0;
}
</style>
