<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Note } from "../types/Note";

export default defineComponent({
  name: "NoteList",
  emits: ["delete-note"],
  props: {
    notes: {
      type: Array as PropType<Note[]>,
      required: true,
    },
  },
  setup(_, { emit }) {
    const deleteNote = (id: PropertyKey): void => {
      emit("delete-note", id);
    };
    return { deleteNote };
  },
});
</script>
<template>
  <div class="note-list">
    <h3>代辦事項列表</h3>
    <ul v-if="notes.length">
      <li v-for="note in notes" :key="note.id">
        <div class="delete" @click="deleteNote(note.id)">
          <i class="material-icons"> delete </i>
        </div>
        <h2>
          {{ note.title }}
        </h2>
        <div class="category">{{ note.category }}</div>
        <div class="content">
          <p>
            {{ note.content }}
          </p>
        </div>
        <div class="date">
          {{ note.date.getFullYear() }} / {{ note.date.getMonth() }} /
          {{ note.date.getDate() }}
        </div>
      </li>
    </ul>
    <ul v-else>
      <li>no data</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.note-list {
  max-width: 960px;
  margin: 0 auto 40px;
  .delete {
    float: right;
    color: #1195c9;
    cursor: pointer;
  }
  .category {
    font-size: 16px;
    color: #999;
  }
  .date {
    float: right;
    font-size: 12px;
    color: #999;
  }
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
    overflow: auto;
  }
}
.note-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
</style>
