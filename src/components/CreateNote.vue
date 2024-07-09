<script lang="ts">
import { defineComponent, ref } from "vue";
import Categoty from "./types/Note";

export default defineComponent({
  name: "CreateNote",
  emits: ["add-note"],

  setup(_,{ emit }) {
    const title = ref<string>("");
    const content = ref<string>("");
    const category = ref<Categoty>("");

    const submitForm = (): void => {
      const newNote = {
        title: title.value,
        content: content.value,
        category: category.value,
        date: new Date(),
      };
      emit("add-note", newNote);
      title.value = "";
      content.value = "";
    };
    return { title, content, category, submitForm };
  },
});
</script>
<template>
  <div>
    <h1>建立新事項</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">標題</label>
        <input id="title" v-model="title" required />
      </div>
      <div>
        <label for="content">內容</label>
        <textarea id="content" v-model="content" required></textarea>
      </div>
      <div>
        <label for="category">分類</label>
        <select id="category" v-model="category" required>
          <option value="">請選擇</option>
          <option value="work">Work</option>
          <option value="private">Private</option>
          <option value="family">Family</option>
        </select>
      </div>
      <button type="submit">建立</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
form {
  max-width: 50%;
  margin: 30px auto;
  text-align: end;
  & > div {
    width: 100%;
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      margin-right: 10px;
      font-weight: bolder;
    }
    input,
    select,
    textarea {
      border: 0;
      width: 90%;
      height: 40px;
    }
  }
}
</style>