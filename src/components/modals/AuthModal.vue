<template>
  <modal :classes="'auth-modal'" :width="960" :height="640" :name="modalName">
    <div class="modal-wrapper">
      <div class="modal-left">
        <img src="/assets/img/modal-logo.svg" class="modal-logo">
      </div>
      <div class="modal-right">
        <img @click="$modal.hide(modalName)" class="close-modal" src="/assets/img/modal-close-icon.svg">
        <span class="auth-top">Sign up to ShootMode</span>
        <div class="auth-middle">
          <div class="email-input">
            <input type="text" placeholder="Enter you email address">
            <img src="/assets/img/messages-icon.svg" alt="">
          </div>
          <div class="button-confirm">
            <span>Next</span>
          </div>
          <div class="divider">
            <span>or</span>
          </div>
          <div class="btn-login">
            <img src="/assets/img/google-icon.svg">
            <span>Continue with Google</span>
          </div>
          <div class="btn-login">
            <img src="/assets/img/facebook-icon.svg">
            <span>Continue with Facebook</span>
          </div>
        </div>
        <div class="auth-bottom">
          <span>Do you have account? <font>Log in</font></span>
        </div>
      </div>
    </div>
  </modal>
</template>

  <script>
export default {
  name: 'AuthModal',
  data() {
    return {
      modalName: 'authModal'
    }
  },
  methods: {
    show() {
      this.$modal.show(this.modalName);
    },
    hide() {
      this.$modal.hide(this.modalName);
    }
  },
  mounted() {
    this.show()
  }
}
</script>


<style scoped>
.modal-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.modal-left {
  min-width: 320px;
  padding: 24px;
  background: #FEEBDB;
}

.modal-logo {
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 8px 32px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}

.modal-right {
  width: 100%;
  padding: 112px 112px 120px 112px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 16px;
  right: 24px;
  cursor: pointer;
}

.auth-top {
  font-weight: 500;
  font-size: 28px;
}

.auth-middle {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.email-input {
  width: 100%;
  position: relative;
}

.email-input>input {
  width: 100%;
  outline: 0;
  background: #FFFFFF;
  border: 1px solid #E8E7E7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  padding: 12px 16px 12px 52px;
  font-size: 18px;
  font-family: 'Roobert';
}

.email-input>img {
  position: absolute;
  left: 16px;
  top: 12px;
  width: 24px;
  height: 24px;
}

.button-confirm {
  background: #FF6644;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
}

.divider {
  position: relative;
  border-top: 1px solid #d5d5d5;
  margin: 12px 0;
}

.divider>span {
  position: absolute;
  left: calc(50% - 19.5px);
  top: -10px;
  width: 39px;
  display: flex;
  justify-content: center;
  background: #fff;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.32);
}

.btn-login {
  background: #FFFFFF;
  border: 1px solid #E8E7E7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 12px 0;
  font-size: 18px;
  cursor: pointer;
}

.btn-login>img {
  position: absolute;
  top: 12px;
  left: 16px;
}

.auth-bottom>span>font {
  color: #F64;
  cursor: pointer;
}
</style>
