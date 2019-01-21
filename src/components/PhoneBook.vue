<template>
  <div>
    <router-link :to="{name: 'PhoneBookAdd'}">Add</router-link>
    <div>
      <label>Search: </label>
      <input type="text" name="search" v-model="searchText"/>
    </div>
    <table class="table">
      <thead>
      <tr>
        <th @click="setSort('nick')">Name</th>
        <th @click="setSort('phoneNumber')">Phone</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in sortedPhoneBook" :key="item._id">
        <td>{{item.nick}}</td>
        <td>{{item.phoneNumber}}</td>
        <td>
          {{item._id}}
          <div></div>
          <button class="btn btn-lg" v-on:click="deleteItem(item._id)">
            Delete
          </button>
          <button class="btn btn-lg">
            <router-link :to="{ name: 'PhoneBookEdit', params: { id: item._id }}">Edit</router-link>
          </button>
        </td>
      </tr>
      <tr v-if="!this.sortedPhoneBook.length">
        <td colspan="2">
          No items
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button :disabled="shouldDisablePrevPageButton()" @click="prevPage">Previous Page</button>
      <button :disabled="shouldDisableNextPageButton()" @click="nextPage">Next Page</button>
    </div>
  </div>
</template>
<script>
import PhoneBookService from '../services/phone-book.service'

export default {
  name: 'PhoneBook',
  data () {
    return {
      phoneBook: [],
      sortName: 'nick',
      sortDir: 'asc',
      pageSize: 2,
      currentPage: 1,
      searchText: ''
    }
  },
  created () {
    this.getAllItems()
  },
  methods: {
    deleteItem (id) {
      PhoneBookService.deletePhone(id).then(() => {
        this.getAllItems()
      })
    },
    getAllItems () {
      PhoneBookService.getPhoneBook().then(resp => {
        this.phoneBook = resp
      })
    },
    setSort (newSort) {
      if (newSort === this.sortName) {
        this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc'
      }

      this.sortName = newSort
    },
    nextPage () {
      if ((this.currentPage * this.pageSize) < this.phoneBook.length) {
        this.currentPage++
      }
    },
    prevPage () {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    shouldDisableNextPageButton () {
      return (this.currentPage * this.pageSize) >= this.phoneBook.length
    },
    shouldDisablePrevPageButton () {
      return this.currentPage === 1
    }
  },
  computed: {
    sortedPhoneBook () {
      return this.phoneBook.slice()
        .filter(item => {
          return item.nick.indexOf(this.searchText) >= 0 || item.phoneNumber.indexOf(this.searchText) >= 0
        })
        .sort((a, b) => {
          let modifier = 1
          if (this.sortDir === 'desc') modifier = -1
          if (a[this.sortName] < b[this.sortName]) return -1 * modifier
          if (a[this.sortName] > b[this.sortName]) return 1 * modifier
          return 0
        }).filter((row, index) => {
          let start = (this.currentPage - 1) * this.pageSize
          let end = this.currentPage * this.pageSize
          if (index >= start && index < end) {
            return true
          }
        })
    }
  }
}
</script>
