<template>
  <div class="chapter-area">
    <a-collapse class="chapter-box" v-model:activeKey="activeKey" ghost>
      <a-collapse-panel
        class="chapter-item"
        v-for="item in chapterTree"
        :key="item.id"
        :header="item.moduleName"
      >
        <p>{{ item.details }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
  <div class="preview-area">
    <div class="button-box">
      <a-button class="button" type="primary" shape="default" size="large" @click="downloadFlag=!downloadFlag"
        >下载</a-button
      >
      <a-button class="button" type="primary" shape="default" size="large" @click="uploadFlag=!uploadFlag"
        >上传</a-button
      >
    </div>
  </div>
  <a-drawer
    title="Files Download"
    placement="left"
    :closable="false"
    :visible="downloadFlag"
    @close="downloadFlag=false"
    width="50%"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
  <a-drawer
    title="Files Upload"
    placement="left"
    :closable="false"
    :visible="uploadFlag"
    @close="uploadFlag=false"
    width="50%"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import { getChapterTree } from "../api/modules";

// 折叠面板
const activeKey = ref([]);
// 章节列表
let chapterTree: Array<{ id; moduleName; details; sublist }> = reactive([]);
onMounted(() => {
  // 获取当前章节列表
  getChapterTree().then((data) => {
    chapterTree.push(...data.data.list);
  });
});
// 抽屉
const downloadFlag = ref(false);
const uploadFlag = ref(false);
</script>

<style scoped lang="less">
.chapter-area {
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: red;
  .chapter-box {
    width: 100%;
    padding: 20px;
    .chapter-item:hover {
      background-color: blue;
    }
  }
}

.preview-area {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 50%;
  background-color: blue;
}

.button-box {
  background-color: pink;
  display: flex;
  .button {
    width: 110px;
    border-radius: 5px;
    margin-right: 10px;
  }
}
</style>
  
  