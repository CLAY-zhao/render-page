<template>
  <div class="index">
    <n-space vertical>
      <n-layout>
        <n-layout-header :inverted="inverted" bordered>
          <span style="padding-left: 20px;">Boy ♂ next ♂ door</span>
          <n-menu mode="horizontal" :inverted="inverted" :options="menu" />
        </n-layout-header>
        <n-layout has-sider>
          <n-layout-sider
            bordered
            show-trigger
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :native-scrollbar="false"
            :inverted="inverted"
            style="max-height: 320px"
          >
            <n-menu
              :inverted="inverted"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menu"
              @select="menuSelect"
            />
          </n-layout-sider>
          <n-layout-content content-style="padding: 24px;">
            <transition name="fade">
              <n-message-provider>
                <router-view />
              </n-message-provider>
            </transition>
          </n-layout-content>
        </n-layout>
        <n-layout-footer :inverted="inverted" bordered>
          Footer Footer Footer
        </n-layout-footer>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import { ref } from 'vue'
import menu from './menu'
export default {
  name: 'layout',
  setup () {
    return {
      inverted: ref(false),
      menu
    }
  },
  methods: {
    menuSelect (item) {
      this.$router.push(item)
    }
  }
}
</script>

<style scoped>
.n-layout-content {
  height: calc(100vh - 70px);
  flex: 1;
}

.n-layout-sider {
  max-height: 100% !important;
}
</style>
