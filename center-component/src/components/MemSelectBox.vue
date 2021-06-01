<template>
  <b-dropdown :text="selection.join()" menu-class="w-100" block variant="outline-primary"
              class="w-100">
    <input v-model="search" type="text" class="form-control" placeholder="Search">
    <b-dropdown-form class="mem-dropdown">
      <b-form-checkbox v-model="selectAll" class="mb-1">Select All Courses</b-form-checkbox>
      <b-form-checkbox-group v-model="selection" v-for="(item, index) in filterArray" :key="index">
        <b-dropdown-header class="header-custom">
          {{ item.label }}
        </b-dropdown-header>
        <b-form-checkbox v-for="(option, index) in item.value" :key="index" :value="option.value" class="mb-1">
          {{ option.label }}
        </b-form-checkbox>
      </b-form-checkbox-group>
    </b-dropdown-form>
  </b-dropdown>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      selection: [],
      selectAll: false,
      dropdownItem: [
        {
          label: 'custom',
          value: [
            {label: 'design', value: 'design'},
            {label: 'Typo', value: 'Typo'},
            {label: 'Motion', value: 'Motion'},
            {label: 'Graphic', value: 'Graphic'},
            {label: 'Mobile', value: 'Mobile'},
          ]
        },
        {
          label: 'custom 2',
          value: [
            {label: 'Samsung', value: 'Samsung'},
            {label: 'Iphone', value: 'Iphone'},
            {label: 'Nokia', value: 'Nokia'},
            {label: 'Blackberry', value: 'Blackberry'},
            {label: 'Mac', value: 'Mac'},
          ]
        }
      ],
      filterArray: [],
    }
  },
  watch: {
    selection: {
      handler() {
        console.log(this.selection);
      }
    },
    selectAll: {
      handler() {
        if (this.selectAll === true) {
          this.selection = []
          this.filterArray.forEach(i => {
            i.value.forEach(value => {
              this.selection.push(value.value)
            })
          })
        } else {
          this.selection = []
        }
      }
    },
    search: {
      handler() {
        if (!this.search || this.search.length === 0) {
          this.filterArray = [...this.dropdownItem];
          return;
        }
        this.filterArray = [];
        if (this.search && this.search.length > 0) {
          this.dropdownItem.forEach(dropdownItem => {
            const potential = dropdownItem.value.filter(item => item.value.toUpperCase().includes(this.search.toUpperCase()));
            if (potential.length > 0) {
              this.filterArray.push({
                label: dropdownItem.label,
                value: potential
              });
            }
          })
        }
        console.log(this.filterArray);
      }
    }
  },
  mounted() {
    this.filterArray = [...this.dropdownItem]
  },
}
</script>
<style lang="scss" scoped>
.mem-dropdown {
  max-height: 300px;
  overflow-y: scroll;
  margin-top: 10px;

  .b-dropdown-form {
    padding: 0.25rem 0.5rem;

    &:focus {
      border: none;
      outline: none !important;
    }
  }
}

.header-custom {
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #859DA7;

  .dropdown-header {
    padding: 10px 0;
  }
}
</style>