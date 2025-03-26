<template>
  <t-layout>
    <t-header>
      <t-head-menu defaultValue="item1" height="120px" theme="light">
        <template #logo>
          <h1>社么好玩</h1>
        </template>
        <t-menu-item value="item1">
          <router-link to="/backend/">社团简介</router-link>
        </t-menu-item>
        <t-menu-item value="item2">
          <router-link to="/backend/resumeList">简历列表</router-link>
        </t-menu-item>
        <t-menu-item value="item3">
          <router-link to="/backend/aiHelp">AI辅助</router-link>
        </t-menu-item>
        <template #operations>
          <a href="javascript:">
            <t-icon class="t-menu__operations-icon" name="search" />
          </a>
          <a href="javascript:">
            <t-icon
              class="t-menu__operations-icon"
              name="notification-filled"
            />
          </a>
          <a href="javascript:">
            <t-icon class="t-menu__operations-icon" name="home" />
          </a>
        </template>
      </t-head-menu>
    </t-header>
    <t-content>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </t-content>
  </t-layout>
</template>

<style scoped>
.t-layout__content {
  height: calc(100vh - 56px);
}
</style>

<script setup></script>
