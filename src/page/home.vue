<template>
  <t-layout>
    <t-header style="text-align: center">
      <h2>社么好玩-后台管理系统</h2>
    </t-header>
    <t-content>
      <t-row align="middle" justify="center" style="height: calc(100vh - 56px)">
        <t-col>
          <t-card hover-shadow style="border-radius: 20px">
            <t-form
              ref="form"
              :colon="true"
              :data="formData"
              :label-width="0"
              @reset="onReset"
              @submit="onSubmit"
            >
              <h3 style="text-align: center; margin-top: 0">账号登录</h3>
              <t-form-item name="account">
                <t-input
                  v-model="formData.account"
                  clearable
                  placeholder="请输入账户名"
                >
                  <template #prefix-icon>
                    <desktop-icon />
                  </template>
                </t-input>
              </t-form-item>

              <t-form-item name="password" style="margin-bottom: 5px">
                <t-input
                  v-model="formData.password"
                  clearable
                  placeholder="请输入密码"
                  type="password"
                >
                  <template #prefix-icon>
                    <lock-on-icon />
                  </template>
                </t-input>
              </t-form-item>

              <t-form-item style="margin-bottom: 5px">
                <t-row justify="end" style="width: 100%">
                  <t-col>
                    <router-link to="/register">
                      <t-link>立即注册</t-link>
                    </router-link>
                  </t-col>
                </t-row>
              </t-form-item>

              <t-form-item>
                <t-space align="center" style="width: 100%">
                  <t-button block theme="primary" type="submit">登录</t-button>
                  <t-button block theme="default" type="reset">清空</t-button>
                </t-space>
              </t-form-item>
            </t-form>
          </t-card>
        </t-col>
      </t-row>
    </t-content>
  </t-layout>
</template>

<script setup>
import api from "../api";
import { reactive } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import { DesktopIcon, LockOnIcon } from "tdesign-icons-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = reactive({
  account: "",
  password: "",
});

const onReset = () => {
  MessagePlugin.success("重置成功");
};

const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success("正在登录");
    api.club.login(formData).then((res) => {
      console.log(res);
      if (res === 400) {
        MessagePlugin.error("登录失败");
        return;
      }
      localStorage.setItem("account", formData.account);
      router.push("/backend");
    });
  } else {
    console.log("Validate Errors: ", firstError, validateResult);
    MessagePlugin.warning(firstError);
  }
};
</script>
