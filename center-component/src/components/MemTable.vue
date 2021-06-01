<template>
  <div class="container mem-transaction">
    <h2 class="page-title mb-4 mt-4">
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
    <div class="custom-table mt-4">
      <div class="row filter-box">
        <div class="col-md-6 search-box">
          <div class="input-group">
            <div class="input-group-prepend">
              <b-icon-search class="custom-icon-search"></b-icon-search>
            </div>
            <input v-model="search" type="text" class="form-control" style="padding-left: 40px" placeholder="Search">
          </div>
        </div>
        <div class="col-md-3 select-box">
          <mem-select-box></mem-select-box>
        </div>
        <div class="col-md-3 date-range-box">
          <div class="input-group">
            <mem-date-rank-picker ref="dateRankPicker"></mem-date-rank-picker>
            <div class="input-group-append" @click="$refs.dateRankPicker.$refs.daterange.show()">
              <!--              <img id="calendar-icon" class="custom-icon" style="display: none; right: -2px" src="../../public/img/calendar.svg" alt="">-->
              <img id="calendar-icon-disable" class="custom-icon" src="../../public/img/calendar-disable.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <b-table class="customer-table" :items="filterUser" :fields="fields">
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
                  <img class="customer-img" :src="row.value.img_path" alt="img"/>
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
                <div class="date-start">
                  <span class="date-prefix">Started: </span> {{ row.value.start }}
                </div>
                <div class="date-end">
                  <span v-if="row.value.end !== ''" class="date-prefix">Ended: </span>{{ row.value.end }}
                </div>
              </div>

            </template>
            <template #cell(status)="row">
              <div class="status">
                <span :class="row.value ? 'status-active' : 'status-inactive'">
                  {{ row.value ? 'Active' : 'Inactive' }}
                </span>
              </div>
            </template>
            <template #cell(amount)="row">
              <span class="amount">${{ row.value.toFixed(2) }}</span>
              <span class="amount-unit">/mo.</span>
            </template>
            <template #cell(menu)>
              <b-dropdown id="dropdown-more" text="" class="m-md-2">
                <b-dropdown-item>
                  <b-img :src="'./img/profile.svg'" alt="lefticon"></b-img>
                  Profile
                </b-dropdown-item>
                <b-dropdown-item>
                  <b-img :src="'./img/pdf.svg'" alt="lefticon"></b-img>
                  Download Invoice
                </b-dropdown-item>
                <b-dropdown-item>
                  <b-img :src="'./img/refund.svg'" alt="lefticon"></b-img>
                  Refund
                </b-dropdown-item>
              </b-dropdown>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MemDateRankPicker from './MemDateRangePicker'
import MemSelectBox from './MemSelectBox'

export default {
  name: 'Center',
  components: {
    MemDateRankPicker,
    MemSelectBox
  },
  data() {
    return {
      search: null,
      fields: [
        {
          key: 'customer',
          label: 'CUSTOMER',
          sortable: true,
          tdClass: 'align-middle'
        },
        {
          key: 'date',
          label: 'DATE',
          sortable: true,
          tdClass: 'align-middle'
        },
        {
          key: 'status',
          label: 'STATUS',
          sortable: true,
          tdClass: 'align-middle'
        },
        {
          key: 'amount',
          label: 'AMOUNT',
          sortable: true,
          tdClass: 'align-middle'
        },
        {
          key: 'menu',
          label: '',
          tdClass: 'align-middle'
        }
      ],
      items: [
        {
          customer: {
            name: 'Jacob Jones',
            img_path: './customer-img/Jacob.png',
            email: 'jacob.jones@gmail.com',
            products: ['UI Design']
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
            products: ['UI Design']
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
            products: ['Digital Marketing']
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
            products: ['Computer Programming', 'Symphony']
          },
          date: {
            start: 'Feb 2, 2020 19:30',
            end: ''
          },
          status: false,
          amount: 200
        }
      ],
      filterUser: [],
    }
  },
  watch: {
    search: {
      handler() {
        if (!this.search || this.search.length === 0) {
          this.filterUser = [...this.items];
          return;
        }
        this.filterUser = [];
        if (this.search && this.search.length > 0) {
          this.items.forEach(item => {
            const potential = item.customer.name.toUpperCase().includes(this.search.toUpperCase());
            if (potential) {
              this.filterUser.push(item);
            }
          })
        }
      }
    }
  },
  mounted() {
    this.filterUser = [...this.items]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mem-transaction {
  margin-top: 100px;
  max-width: 948px;
  padding: 0;

  .page-title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #222A3C;
  }

  .mem-card {
    padding: 13px 0;
    background: #F4F4F9;
    border: 1px solid #DEDEEB;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 1px;

    .col {
      border-right: 1px solid #DEDEEB;

      &:last-child {
        border: none;
      }

      p {
        text-transform: uppercase;
        color: #616775;
        font-size: 12px;
        margin-bottom: 10px;
      }

      h4 {
        color: #222A3C;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }

  .custom-table {
    .filter-box {
      margin-bottom: 10px;
    }

    /deep/ .input-group {
      height: 44px;
      max-width: 360px;

      .form-control {
        border: 1px solid #DEDEEB;
        box-shadow: none;
        border-radius: 4px !important;
        font-size: 14px;
        line-height: 19px;

        &:focus {
          border: 1px solid rgba(0, 209, 255, 0.8) !important;
        }

        &:hover {
          border: 1px solid rgba(0, 209, 255, 0.8);
        }
      }
    }
  }

  .date-range-box {
    font-family: 'Proxima Nova' !important;
    padding-left: 0 !important;
  }

  /deep/ .dropdown {
    button {
      height: 44px;
    }
  }

  /deep/ .input-group {
    .form-control {
      &:focus {
        border: 1px solid rgba(0, 209, 255, 0.8);
        box-shadow: none;
      }
    }
  }

  /deep/ .dropdown-toggle {
    width: 100% !important;
    height: 38px;
    padding-right: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #ced4da;
    color: black;

    &:hover {
      border: 1px solid rgba(0, 209, 255, 0.8);
      background: white;
    }

    &:focus {
      border: 1px solid rgba(0, 209, 255, 0.8);
      box-shadow: none;
      background: white;
    }
  }

  /deep/ .dropdown-menu {
    padding: 10px;
    outline: none;
  }

  /deep/ .custom-checkbox {
    label {
      font-size: 14px;
      color: #222A3C;
      padding-left: 10px;
    }
  }

  /deep/ .dropdown-toggle::after {
    position: absolute;
    right: 10px;
    top: 50%;
    color: #859DA7;
  }

  .custom-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    color: #859DA7;
    cursor: pointer;
    //color: #5458FB;
  }

  .custom-icon-search {
    position: absolute !important;
    z-index: 4 !important;
    left: 0 !important;
    top: 50% !important;
    transform: translate(50%, -50%) !important;
    color: #9FA5B7 !important;
  }

  .customer-table {
    font-family: 'Open Sans';

    .customer {
      font-size: 14px;
      line-height: 19px;

      .customer-product {
        display: flex;
        margin-bottom: 11px;
        margin-top: 2px;

        .product-label {
          color: #9FA5B7;
          margin-right: 4px;
          font-weight: normal;
        }

        .product-list {
          color: #222A3C;
          font-weight: 600;
          padding-right: 4px;
        }
      }

      .customer-info {
        display: flex;
        align-items: center;

        .customer-img {
          width: 44px;
          height: 44px;
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .customer-primary-info {
          margin-bottom: 10px;

          .customer-name {
            color: #222A3C;
            font-weight: 600;
          }

          .customer-email {
            color: #9FA5B7;
            font-weight: normal;
            margin-top: 1px;
          }
        }
      }
    }

    .date-start, .date-end {
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      color: #222A3C;

      .date-prefix {
        color: #9FA5B7;
      }
    }

    .date-start {
      margin-bottom: 7px;
    }

    .status {
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
      border-radius: 31px;

      .status-active {
        padding: 4px 10px;
        border-radius: 31px;
        color: #14C8B1;
        background: #E8FAF7;
      }

      .status-inactive {
        padding: 4px 10px;
        border-radius: 31px;
        color: #EB5757;
        background: #FDEEEE;
      }
    }

    .amount {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #222A3C;
    }

    .amount-unit {
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      color: #9FA5B7;
    }
  }

  .custom-icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    color: #859DA7;
    //color: #5458FB;
  }

  .custom-icon-search {
    position: absolute !important;
    z-index: 4 !important;
    left: 0 !important;
    top: 50% !important;
    transform: translate(50%, -50%) !important;
    color: #9FA5B7 !important;
  }
}
</style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Proxima+Nova');

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

#dropdown-more {

  .btn {
    padding: 1px 5px;
    background: #fff0;
    border: none;
    color: #222A3C;

    &::after {
      width: 24px;
      content: '\2807' !important;
      border-top: 0 !important;
      vertical-align: unset !important;
      font-size: 22px;
      font-weight: 700;
      position: static;
    }
  }

  .btn:hover, .btn:active {
    background: #DEDEEB;
    border: none;
  }

  ul {
    left: unset !important;
    right: 2px !important;
    top: 6px !important;
    border: none;
    box-shadow: 0px 0px 12px 1px #dedeeb;

    li {
      .dropdown-item {
        &:active {
          background-color: #fff !important;
          color: #222A3C;
        }
      }

      img {
        margin-right: 7px;
      }
    }
  }
}

.customer-table {
  thead {
    th {
      font-size: 12px;
      line-height: 16px;
      font-weight: normal;
      color: #9FA5B7;
      background-image: none !important;

      div {
        display: inline;
        padding-right: 13px;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e");
        background-position: right center;
        background-repeat: no-repeat;
        background-size: 8px 8px;
      }

      &:last-child {
        div {
          background-image: none !important;
        }
      }
    }
  }
}
</style>


