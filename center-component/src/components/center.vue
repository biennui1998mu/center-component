<template>
  <div class="container">
    <h2 class="page-title">
      Subscriptions
    </h2>
    <b-row class="mt-3">
      <b-col class="text-center bg-light">
        <p>Subscriptions</p>
        <h4>156</h4>
      </b-col>
      <b-col class="text-center bg-light">
        <p>MRR</p>
        <h4>$2,861</h4>
      </b-col>
      <b-col class="text-center bg-light">
        <p>Yearly revenue</p>
        <h4>$34,333</h4>
      </b-col>
    </b-row>
    <div class="custom-table">
      <div class="row">
        <div class="col-md-6">
          <div class="input-group">
            <div class="input-group-prepend">
              <button class="btn btn-primary" type="submit">
                <b-icon-search></b-icon-search>
              </button>
            </div>
            <input type="text" class="form-control" placeholder="Search">
          </div>
        </div>
        <div class="col-md-3">
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div class="col-md-3">
          <div class="input-group">
            <date-range-picker v-model="range" :options="options" :format="format" class="form-control"/>
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit">
                <b-icon-calendar></b-icon-calendar>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'HelloWorld',
  data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      range: [moment(), moment()],
      options: {
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last week': [moment().subtract(6, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
          'All Time': []
        },
        showCustomRangeLabel: true,
        alwaysShowCalendars: true,
        linkedCalendars: false,
      },
      format: 'MMMM DD, YYYY',
      items: [
        {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
        {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
        {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
        {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
::v-deep .daterangepicker {
  .ranges {
    li {
      margin: 10px;
    }
  }
}
</style>
