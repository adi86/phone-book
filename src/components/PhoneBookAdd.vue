<template>
  <form @submit="validateForm">
    <div v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error" class="error">{{ error }}</li>
      </ul>
    </div>
    <input type="text" name="nick" v-model="user.nick"/>
    <input type="number" name="phoneNumber" v-model="user.phoneNumber"/>
    <button type="submit">Save</button>
  </form>
</template>

<script>
import PhoneBookService from '../services/phone-book.service'

export default {
  name: "PhoneBookAdd",
  data () {
    return {
      user: {
        nick: '',
        phoneNumber: ''
      },
      errors: []
    }
  },
  methods: {
    addUser () {
      PhoneBookService.addUser(this.user).then( resp => {
        this.$router.go(-1)
      })
    },

    validateForm (e) {
      e.preventDefault()
      if (this.user.nick && this.user.phoneNumber) {
        this.addUser()
        return true
      }

      this.errors = []

      if (!this.user.nick) {
        this.errors.push('Nick required')
      }

      if (!this.user.phoneNumber) {
        this.errors.push('Phone number required')
      }

      return false;
    }
  }
}
</script>

<style scoped>

</style>
