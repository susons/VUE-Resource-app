<template>
  <Dialog
    v-if="inputInvalid"
    title="Invalid input"
    @close="inputInvalid = false"
  >
    <template v-slot:default>
      <p>Atleast one input values is invalid</p>
      <p>
        Please dont bother me with this nonsence any more, please and than you
      </p>
    </template>
    <template #actions>
      <div>
        <Button @click="inputInvalid = false">OK</Button>
      </div>
    </template>
  </Dialog>
  <Card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input ref="title" id="title" type="text" />
      </div>
      <div class="form-control">
        <label for="description">description</label>
        <textarea rows="3" ref="description" id="description" type="text" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input ref="link" id="link" type="url" model />
      </div>
      <div>
        <Button type="submit">Add resource</Button>
      </div>
    </form>
  </Card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    submit() {
      const title = this.$refs.title.value;
      const description = this.$refs.description.value;
      const link = this.$refs.link.value;

      if (!title || !description || !link) {
        this.inputInvalid = true;
        return;
      }

      this.addResource(title, description, link);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
