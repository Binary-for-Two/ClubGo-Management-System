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
              :colon="true"
              :data="formData"
              :label-width="0"
              :rules="rules"
              @reset="onReset"
              @submit="onSubmit"
            >
              <h3 style="text-align: center; margin-top: 0">账号注册</h3>
              <t-form-item name="email">
                <t-input
                  v-model="formData.email"
                  clearable
                  placeholder="请输入邮箱"
                >
                  <template #prefix-icon>
                    <mail-icon />
                  </template>
                </t-input>
              </t-form-item>

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
                    <router-link to="/">
                      <t-link>前往登录</t-link>
                    </router-link>
                  </t-col>
                </t-row>
              </t-form-item>

              <t-form-item>
                <t-space align="center" style="width: 100%">
                  <t-button block theme="primary" type="submit">注册</t-button>
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
import { reactive } from "vue";
import api from "../api";
import { useRouter } from "vue-router";
import { MessagePlugin } from "tdesign-vue-next";
import { DesktopIcon, LockOnIcon, MailIcon } from "tdesign-icons-vue-next";

const router = useRouter();

const rules = {
  account: [
    { required: true, message: "账号必填", type: "error", trigger: "blur" },
    { required: true, message: "账号必填", type: "error", trigger: "change" },
    { whitespace: true, message: "账号不能为空" },
    { min: 3, message: "账号长度应在3到6之间", type: "error", trigger: "blur" },
    { max: 6, message: "账号长度应在3到6之间", type: "error", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码必填", type: "error", trigger: "blur" },
    { min: 3, message: "密码长度应在3到6之间", type: "error", trigger: "blur" },
    { max: 6, message: "密码长度应在3到6之间", type: "error", trigger: "blur" },
  ],
  email: [
    { required: true, message: "邮箱必填", type: "error", trigger: "blur" },
  ],
};

const formData = reactive({
  account: "",
  password: "",
  email: "",
});

const onReset = () => {
  MessagePlugin.success("重置成功");
};

const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success("正在注册");
    api.club.register(formData).then((res) => {
      console.log(res);
      router.push("/");
    });
  } else {
    console.log("Validate Errors: ", firstError, validateResult);
    MessagePlugin.warning(firstError);
  }
};
</script>
