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
  name: 'PhoneBookEdit',
  data () {
    return {
      user: {},
      errors: []
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    updateUser () {
      PhoneBookService.updateUser(this.$route.params.id, {
        nick: this.user.nick,
        phoneNumber: this.user.phoneNumber
      }).then(resp => {
        this.$router.push({name: 'PhoneBook'})
      })
    },

    getUser () {
      PhoneBookService.getUser(this.$route.params.id).then(user => {
        this.user = user
      })
    },

    validateForm (e) {
      e.preventDefault()
      if (this.user.nick && this.user.phoneNumber) {
        this.updateUser()
        return true
      }

      this.errors = []

      if (!this.user.nick) {
        this.errors.push('Nick required')
      }

      if (!this.user.phoneNumber) {
        this.errors.push('Phone number required')
      }
    }
  }
}
</script>
