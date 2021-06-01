<template>
  <date-range-picker ref="daterange" v-model="range" :options="options" :format="format"
                     class="form-control" style="padding-right: 35px; overflow: hidden"/>
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
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
        opens: 'left',
      },
      format: 'MMMM DD, YYYY',
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">

.daterangepicker {
  font-family: 'Proxima Nova' !important;
  border: 1px solid #DEDEEB !important;
  box-shadow: 0px 4px 25px rgba(25, 26, 79, 0.1) !important;

  .drp-calendar {
    .calendar-table {
      .table-condensed {
        thead {
          tr {
            th {
              min-width: 40px;
              height: 40px;
              font-weight: bold;
              font-size: 13px;
              line-height: 16px;
              color: #5458FB;
              border-radius: 0;

              &:first-child, &:last-child {
                color: #EB5757;
              }
            }

            &:first-child {
              th {
                color: #222A3C;
                background: #E8F3F8;
              }

            }

            .prev, .next {
              height: 40px;
              background: #E8F3F8;

              &:active {
                background: #DEDEEB;
              }

              &:hover {
                background: #DEDEEB;
              }
            }
          }
        }

        tbody {
          tr {
            td {
              height: 40px;
            }

            .in-range {
              background: #E8F3F8;
            }

            .start-date {
              background: #5458FB;
            }

            .end-date {
              background: #5458FB;
            }
          }
        }
      }
    }
  }

  .left {
    margin-right: 23px !important;
    border-left: none !important;
  }

  .right {
    margin-right: 27px !important
  }

  .ranges {
    float: right !important;
    padding-left: 10px;
    padding-right: 10px;
    border-left: 1px solid #DEDEEB;
    padding-bottom: 45px;

    li {
      border: 1px solid #DEDEEB;
      margin: 10px 0;
      border: 1px solid #DEDEEB !important;
      border-radius: 3px !important;
      text-align: center !important;
      font-size: 14px !important;
      line-height: 16px !important;
      color: #222A3C !important;
      font-weight: normal;

      &.active {
        background-color: #5458FB !important;
        color: #FFFFFF !important;
      }
    }
  }

  .drp-buttons {
    border-top: none !important;
    padding: 0 8px 10px !important;
    position: absolute;
    right: 3px;
    bottom: 0;

    .btn {
      margin-left: 5px !important;
      width: 66px !important;
      height: 33px !important;
      border-radius: 3px !important;
      font-family: 'Proxima Nova' !important;
      font-weight: normal !important;
      font-size: 14px !important;
      line-height: 16px !important;

      &.active {
        color: #FFFFFF;
      }
    }

    .drp-selected {
      display: none !important;
    }

    .applyBtn {
      background: #14C8B1 !important;
      border: 1px solid #14C8B1 !important;
    }

    .cancelBtn {
      background: #FFFFFF !important;
      border: 1px solid #DEDEEB !important;
      color: #859DA7 !important;
    }
  }

}
</style>