import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { PhoneNumberUtil } from 'google-libphonenumber'
import ja from 'vee-validate/dist/locale/ja.json';

// 必要なルールのみインポート
extend('required', required);
extend('email', email);
extend('phone', {
  message: '{_field_}は有効な番号ではありません',
  validate(value) {
    const util = PhoneNumberUtil.getInstance()
    try {
      const phoneiNumber = util.parseAndKeepRawInput(value, 'JP')
      return util.isValidNumber(phoneiNumber)
    } catch (err) {
      return false
    }
  }
})
extend('accept', {
  message: '{_field_}は必須項目です',
  validate(value) {
    try {
      return value
    } catch (err) {
      return false
    }
  }
})

// メッセージを設定
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);