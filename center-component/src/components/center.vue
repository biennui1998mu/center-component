<template>
  <div class="container mem-transaction">
    <h2 class="page-title mb-4">
      Subscriptions
    </h2>
    <b-row class="mb-3 mem-card">
      <b-col class="text-center">
        <p>Subscriptions</p>
        <h4>156</h4>
      </b-col>
      <b-col class="text-center">
        <p>MRR</p>
        <h4>$2,861</h4>
      </b-col>
      <b-col class="text-center">
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
        <b-table class="customer-table" striped hover :items="items" :fields="fields">
          <template #cell(customer)="row">
            <div class="customer">
              <div class="customer-product">
                <div class="product-label">
                  Product:
                </div>
                <div v-for="(item, index) in row.value.products" :key="index" class="product-list">
                  {{ item }}
                </div>
              </div>
              <div class="customer-info">
                <img class="customer-img" :src="row.value.img_path" alt="img" />
                <div class="customer-primary-info">
                  <div class="customer-name">
                    {{ row.value.name }}
                  </div>
                  <div class="customer-email">
                    {{ row.value.email }}
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #cell(date)="row">
            <div class="date">
              <span class="date-prefix">Started: </span> {{ row.value.start }}
            </div>
            <div class="date">
              <span v-if="row.value.end !== ''" class="date-prefix">Ended: </span>{{ row.value.end }}
            </div>
          </template>
          <template #cell(status)="row">
            <span class="status" :class="row.value ? 'status-active' : 'status-inactive'">
              {{ row.value ? 'Active' : 'Inactive' }}
            </span>
          </template>
          <template #cell(amount)="row">
            <span class="amount">${{ row.value }}</span>
            <span class="amount-unit">/mo.</span>
          </template>
        </b-table>
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
      fields: [
        {
          key: 'customer',
          sortable: true
        },
        {
          key: 'date',
          sortable: true
        },
        {
          key: 'status',
          sortable: true
        },
        {
          key: 'amount',
          sortable: true
        }
      ],
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
        {
          customer: {
            name: 'Jacob Jones',
            img_path: './customer-img/Jacob.png',
            email: 'jacob.jones@gmail.com',
            products: [ 'UI Design' ]
          },
          date: {
            start: 'Feb 2, 2020 19:30',
            end: ''
          },
          status: true,
          amount: 200
        },
        {
          customer: {
            name: 'Jerome Bell',
            img_path: './customer-img/Jerome.png',
            email: 'jerome.bell@gmail.com',
            products: [ 'UI Design' ]
          },
          date: {
            start: 'Feb 2, 2020 19:30',
            end: ''
          },
          status: false,
          amount: 200
        },
        {
          customer: {
            name: 'Wade Warren',
            img_path: './customer-img/Wade.png',
            email: 'wade.warren@gmail.com',
            products: [ 'Digital Marketing' ]
          },
          date: {
            start: 'Feb 2, 2020 19:30',
            end: 'May 6, 2021 19:30'
          },
          status: false,
          amount: 200
        },
        {
          customer: {
            name: 'Rosemary',
            img_path: './customer-img/Rosemary.png',
            email: 'rosemary_flores@gmail.com',
            products: [ 'Computer Programming', 'Symphony' ]
          },
          date: {
            start: 'Feb 2, 2020 19:30',
            end: ''
          },
          status: false,
          amount: 200
        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.mem-transaction{
  .page-title{
    font-weight: 600;
    font-size: 18px;
    color: #222A3C;
  }
  .mem-card{
    padding: 20px 0;
    background: #F4F4F9;
    .col{
      border-right: 1px solid #DEDEEB;
      &:last-child{
        border: none;
      }
      p{
        text-transform: uppercase;
        color: #616775;
        font-size: 12px;
        margin-bottom: 10px;
      }
      h4{
        color: #222A3C;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}

.customer-table {
  font-family: 'Open Sans';
  .customer {
    font-size: 14px;
    line-height: 19px;
    .customer-product {
      display: flex;
      margin-bottom: 11px;
      .product-label {
        color: #9FA5B7;
        margin-right: 4px;
        font-weight: 400;
      }
      .product-list {
        color: #222A3C;
        font-weight: 600;
      }
    }
    .customer-info {
      display: flex;
      align-items: center;
    }
  }
}
</style>
<style lang="scss">
.daterangepicker{
  .ranges{
    li{
      border: 1px solid #DEDEEB;
      margin: 10px;
      &.active{
        background-color: #5458FB;
      }
    }
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

</style>


