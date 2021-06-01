<template>
  <div>
    <b-dropdown :text="selection.join()" menu-class="w-100" block variant="outline-primary"
                class="w-100">
      <input v-model="search" type="text" class="form-control" placeholder="Search">
      <b-dropdown-form class="mem-dropdown">
        <div class="custom-checkbox-hover">
          <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="checkmark" viewBox="0 0 12 10">
              <path
                  d="M11.6795 0.827822L10.9024 0.214251C10.5193 -0.0877654 10.2967 -0.0842683 9.96874 0.313122L4.32044 7.1511L1.69186 5.00869C1.32922 4.70985 1.10237 4.72574 0.804223 5.09134L0.20436 5.85751C-0.0999462 6.23328 -0.0610573 6.4466 0.298666 6.74131L4.04497 9.78118C4.43062 10.0991 4.64775 10.0663 4.9459 9.71061L11.7771 1.74341C12.0979 1.36509 12.0785 1.13906 11.6795 0.827822Z"
                  fill="#14C8B1"/>
            </symbol>
          </svg>
          <div class="promoted-checkbox">
            <input id="selectAll" v-model="selectAll" type="checkbox" class="promoted-input-checkbox"/>
            <label for="selectAll">
              <svg>
                <use xlink:href="#checkmark"/>
              </svg>
              Select All Courses
            </label>
          </div>
        </div>
        <b-form-checkbox-group v-model="selection" v-for="(item, index) in filterArray" :key="index">
          <b-dropdown-header class="header-custom">
            {{ item.label }}
          </b-dropdown-header>
          <div class="custom-checkbox-hover" v-for="(option, index) in item.value" :key="index">
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
              <symbol id="checkmark" viewBox="0 0 12 10">
                <path
                    d="M11.6795 0.827822L10.9024 0.214251C10.5193 -0.0877654 10.2967 -0.0842683 9.96874 0.313122L4.32044 7.1511L1.69186 5.00869C1.32922 4.70985 1.10237 4.72574 0.804223 5.09134L0.20436 5.85751C-0.0999462 6.23328 -0.0610573 6.4466 0.298666 6.74131L4.04497 9.78118C4.43062 10.0991 4.64775 10.0663 4.9459 9.71061L11.7771 1.74341C12.0979 1.36509 12.0785 1.13906 11.6795 0.827822Z"
                    fill="#14C8B1"/>
              </symbol>
            </svg>
            <div class="promoted-checkbox">
              <input :id="option.label" v-model="selection" :value="option.value" type="checkbox"
                     class="promoted-input-checkbox"/>
              <label :for="option.label">
                <svg>
                  <use xlink:href="#checkmark"/>
                </svg>
                {{ option.label.charAt(0).toUpperCase() + option.label.slice(1) }}
              </label>
            </div>
          </div>
        </b-form-checkbox-group>
      </b-dropdown-form>
    </b-dropdown>
  </div>
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
    padding: 0;

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

.custom-checkbox-hover {
  cursor: pointer;
  padding: 4px;
  font-family: Open Sans;
  font-size: 14px;

  &:hover {
    background: #F4F4F9;
    border-radius: 3px;
  }
}
</style>
<style lang="scss">
$brand: #14C8B1;
$grey-25: #e6e6e6;
$grey-5: #fcfcfc;

*, *:before, *:after {
  box-sizing: border-box;
}

/* HTML5 Boilerplate accessible hidden styles */
.promoted-input-checkbox {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.promoted-checkbox {
  input:checked + label > svg {
    // Firefox doesn't render svg's that is loading with the use tag if its been set to display: none and then toggled to display: block, so you have to use tricks like this to get it to render again:
    height: 24px;
    animation: draw-checkbox ease-in-out 0.2s forwards;
  }

  label:active::after {
    background-color: $grey-25;
  }

  label {
    color: #222A3C;
    line-height: 20px;
    cursor: pointer;
    position: relative;
    width: 100%;

    &:after {
      content: "";
      height: 20px;
      width: 20px;
      margin-right: 5px;
      float: left;
      border: 2px solid $brand;
      border-radius: 3px;
      transition: 0.15s all ease-out;
    }
  }

  svg {
    height: 0; //Firefox fix
    width: 12px;
    position: absolute;
    left: 4px;
    top: -2px;
    stroke-dasharray: 33; //Firefox fix
  }
}
</style>