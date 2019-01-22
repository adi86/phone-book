<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" md="6" class="mb-2 d-lg-block d-xl-none d-block d-md-block">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortSelectOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" sm="12">
        <b-form-group horizontal label="Search">
          <b-input-group>
            <b-form-input v-model="searchText" placeholder="Type to search"/>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" sm="12">
        <router-link :to="{ name: 'PhoneBookAdd' }">Add Person</router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <b-table
          stripped
          hover
          stacked="md"
          :items="phoneBook"
          :fields="tableFields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :per-page="pageSize"
          :current-page="currentPage"
          :filter="searchText"
          @filtered="onFilter"
        >
          <template slot="actions" slot-scope="row">
            <b-button size="sm" @click.stop="deleteItem(row.item._id)" class="mr-1">
              Delete
            </b-button>
            <b-button size="sm" @click.stop="goToEdit(row.item._id)">
              Edit
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="totalRows"
          :per-page="pageSize"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import PhoneBookService from "../services/phone-book.service";

export default {
  name: "PhoneBook",
  data () {
    return {
      phoneBook: [],
      sortBy: "name",
      sortDesc: false,
      pageSize: 10,
      currentPage: 1,
      searchText: "",
      totalRows: 0,
      tableFields: [
        {key: "name", sortable: true},
        {key: "surname", sortable: true},
        {
          key: "phone",
          sortable: true
        },
        {key: "email", sortable: true},
        {key: 'actions', label: 'Actions'}
      ],
      sortSelectOptions: ['name', 'surname', 'phone', 'email']
    };
  },
  created () {
    this.getAllItems();
  },
  methods: {
    deleteItem (id) {
      PhoneBookService.deletePhone(id).then(() => {
        this.getAllItems();
      });
    },
    getAllItems () {
      PhoneBookService.getPhoneBook().then(resp => {
        this.phoneBook = resp;
      });
    },
    onFilter (itemsFiltered) {
      this.currentPage = 1;
      this.totalRows = itemsFiltered.length;
    },
    goToEdit(id) {
      console.log(id);
      this.$router.push({name: 'PhoneBookEdit', params: {id: id}})
    }
  }
};
</script>
