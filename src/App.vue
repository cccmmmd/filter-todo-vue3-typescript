<script lang="ts">
import { defineComponent, ref, reactive, computed } from "vue";
import { Note } from "./types/Note";
import CreateNote from "./components/CreateNote.vue";
import NoteList from "./components/NoteList.vue";
import data from "./data/index";

export default defineComponent({
  name: "App",
  components: { NoteList, CreateNote },
  setup() {
    const notes = reactive<Note[]>(data);
    const category = ref<String>("All");
    const addNote = (newNote: Omit<Note, "id">): void => {
      notes.unshift({ id: Math.floor(Math.random() * 10000), ...newNote });
    };
    const deleteNote = (id: number): void => {
      const findIndex = notes.findIndex((obj: Note) => obj.id === id);
      notes.splice(findIndex, 1);
    };
    const filterNotes = (c: String) => {
      category.value = c;
    };
    const shownotes = computed(() => {
      if (category.value === "All") return notes;
      else {
        return notes.filter((n: Note) => n.category === category.value);
      }
    });
    return { category, addNote, deleteNote, filterNotes, shownotes };
  },
});
</script>
<template>
  <div class="app">
    <header>
      <CreateNote @add-note="addNote" />
    </header>
    <hr />
    <div class="filter">
      <button
        @click="filterNotes('All')"
        :class="category === 'All' ? 'active' : ''"
      >
        All
      </button>
      <button
        @click="filterNotes('private')"
        :class="category === 'private' ? 'active' : ''"
      >
        private
      </button>
      <button
        @click="filterNotes('work')"
        :class="category === 'work' ? 'active' : ''"
      >
        work
      </button>
      <button
        @click="filterNotes('family')"
        :class="category === 'family' ? 'active' : ''"
      >
        family
      </button>
    </div>
    <NoteList :notes="shownotes" @delete-note="deleteNote" />
  </div>
</template>


<style lang="scss" scoped>
header {
  text-align: center;
  .order {
    margin-top: 20px;
  }
}
.filter {
  margin: 20px auto 0;
  max-width: 960px;
  text-align: right;
}
</style>
