<template>
  <div class="row">
    <div class="col-md-12 mb-4">
      <router-link :to="{ name: 'todo.index' }" class="btn btn-secondary mb-3">Kembali</router-link>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <sup class="badge badge-dark">{{ todo.due_date }}</sup>
          <h4>{{ todo.name }}</h4>
          <hr />
          <blockquote>{{ todo.note }}</blockquote>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <input
              type="text"
              placeholder="Add Task..."
              v-model="name"
              class="form-control"
              :class="{ 'is-invalid': errors.name }"
              @keyup.enter="submit"
              :disabled="todo.status == 1"
            />
            <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
            <b-table striped hover :items="todo.details" :fields="fields" responsive show-empty>
              <template v-slot:cell(name)="row">
                <p :class="{ coret: row.item.status == 1 }">{{ row.item.name }}</p>
              </template>
              <template v-slot:cell(status)="row">
                <span class="badge badge-success" v-if="row.item.status == 1">Selesai</span>
                <span class="badge badge-info" v-else>Aktif</span>
              </template>
              <template v-slot:cell(action)="row">
                <div :key="row.index">
                  <button
                    class="btn btn-primary btn-sm"
                    @click="changeStatus(row.item.id)"
                    v-if="row.item.status == 0"
                  >Selesai</button>
                </div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.coret {
  text-decoration: line-through;
}
</style>
<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.getTodo(this.$route.params.id);
  },
  data() {
    return {
      fields: ["name", "status", "action"],
      name: ""
    };
  },
  computed: {
    ...mapState("todo", {
      todo: state => state.todo
    }),
    ...mapState(["errors"])
  },
  methods: {
    ...mapActions("todo", ["getTodo", "updateStatus"]),
    ...mapActions("detail", ["submitDetail", "changeStatus"]),
    changeStatus(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
    submit() {
      this.submitDetail({
        id: this.$route.params.id,
        name: this.name
      }).then(() => {
        this.getTodo(this.$route.params.id).then(() => {
          this.name = "";
        });
      });
    }
  }
};
</script>
