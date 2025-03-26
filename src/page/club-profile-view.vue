<template>
  <div v-show="!isEditor">
    <t-button
      @click="
        () => {
          isEditor = true;
        }
      "
      >修改
    </t-button>
    <VueShowdown :markdown="markdown" />
  </div>
  <div v-show="isEditor">
    <vue-easymde ref="editorInstance" v-model="initialValue" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { VueShowdown } from "vue-showdown";
import api from "../api";

const isEditor = ref(false);

const account = localStorage.getItem("account");
const markdown = ref("");

const initialValue = ref("");
const editorInstance = ref(null); // 移除 TS 类型

onMounted(() => {
  if (editorInstance.value) {
    console.log(editorInstance.value.getMDEInstance());
  }

  api.club.getClubProfile(account).then((data) => {
    console.log(data);
    if (data === "") {
      initialValue.value = "请输入社团简介";
    }
  });
});
</script>
