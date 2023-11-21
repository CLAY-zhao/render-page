import { h } from 'vue'
import { NIcon } from 'naive-ui'
// https://github.com/07akioni/xicons#installation
import {
  HomeOutline as HomeOutIcon,
  FileTrayFullOutline as FileIcon
} from "@vicons/ionicons5"
import {
  FileWordOutlined,
  FileExcelOutlined,
  FilePptOutlined
} from '@vicons/antd'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions = [
  {
    label: "首页",
    key: "dashboard",
    icon: renderIcon(HomeOutIcon)
  },
  {
    label: "文件处理",
    key: "file-handle",
    icon: renderIcon(FileIcon),
    children: [
      {
        type: "group",
        label: "内容提取",
        key: "people",
        children: [
          {
            label: "Word",
            key: "word",
            icon: renderIcon(FileWordOutlined)
          },
          {
            label: "Excel",
            key: "excel",
            icon: renderIcon(FileExcelOutlined)
          },
          {
            label: "PowerPoint",
            key: "ppt",
            icon: renderIcon(FilePptOutlined)
          }
        ]
      }
    ]
  }
]

export default menuOptions
