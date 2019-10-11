<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Board List
        <b-link href="#/add-board">(Add Board)</b-link>
      </h2>
      <b-table striped hover :items="boards" :fields="fields">
        <template v-slot:cell(action)="data">
          <router-link :to=" `/show-board/${data.value}`">
            <b-btn>Detail</b-btn>
          </router-link>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase'
import router from '../router'
export default {
  name: 'BoardList',
  data () {
    return {
      fields: [],
      boards: [],
      errors: [],
      ref: firebase.firestore().collection('boards'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          title: doc.data().title,
           action: doc.id
        });
      });
    });
  },
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>