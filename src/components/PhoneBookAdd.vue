<template>
  <b-container>
    <b-form @submit.prevent="validateForm">
      <b-form-group>
        <b-form-input type="text" name="name" v-model="user.name" placeholder="Name"/>
        <div class="error" v-if="!$v.user.name.required">Field is required</div>
        <div class="error" v-if="!$v.user.name.alpha">Only alpha characters</div>
      </b-form-group>
      <b-form-group>
        <b-form-input type="text" name="surname" v-model="user.surname" placeholder="Surname"/>
        <div class="error" v-if="!$v.user.surname.required">Field is required</div>
        <div class="error" v-if="!$v.user.surname.alpha">Only alpha characters</div>
      </b-form-group>
      <b-form-group>
        <b-form-input type="text" name="phone" v-model="user.phone" placeholder="Phone"/>
        <div class="error" v-if="!$v.user.phone.required">Field is required</div>
        <div class="error" v-if="!$v.user.phone.phone">Not valid phone</div>
      </b-form-group>
      <b-form-group>
        <b-form-input type="text" name="email" v-model="user.email" placeholder="Email"/>
        <div class="error" v-if="!$v.user.email.required">Field is required</div>
        <div class="error" v-if="!$v.user.email.email">Not valid email</div>
      </b-form-group>
      <b-form-group>
        <b-button size="sm" class="mr-1" type="submit">
          Save
        </b-button>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import PhoneBookService from "../services/phone-book.service";
import { required, email, alpha } from "vuelidate/lib/validators";
import {phoneValidator} from "../common/validators"

export default {
  name: "PhoneBookAdd",
  data() {
    return {
      user: {
        name: '',
        phone: '',
        email: '',
        surname: ''
      }
    };
  },
  validations: {
    user: {
      name: {
        required,
        alpha
      },
      surname: {
        required,
        alpha
      },
      phone: {
        required,
        phone: phoneValidator
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    addUser() {
      PhoneBookService.addUser(this.user).then(resp => {
        this.$router.go(-1);
      });
    },

    validateForm() {
      if (!this.$v.$invalid) {
        this.addUser();
        return true;
      }

      return false;
    }
  }
};
</script>

<style scoped></style>
