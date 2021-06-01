<template>
  <date-range-picker v-model="range" :options="options" :format="format"
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
  }
}
</script>
<style lang="scss" scoped>

</style>
<style lang="scss">
.daterangepicker {
  font-family: 'Proxima Nova' !important;

  .ranges {
    min-width: 168px;
    float: right !important;

    li {
      border: 1px solid #DEDEEB;
      margin: 10px 0;
      border: 1px solid #DEDEEB !important;
      border-radius: 3px !important;
      text-align: center !important;

      &.active {
        background-color: #5458FB !important;
      }
    }
  }
}
td.active, td.active:hover {
  background-color: #5458FB !important;
}

.calendar-table {
  th, td {
    height: 43px !important;
  }
}

.drp-buttons .btn {
  margin-left: 5px !important;
}

.drp-selected {
  display: none !important;
}

.table-condensed {
  thead {
    th {
      min-width: 40px;

      tr:first-child {
        height: 40px;
        background: #E8F3F8;

        th {
          font-weight: bold;
          font-size: 13px;
          line-height: 16px;
          color: #222A3C;
          border-radius: 0;
        }
      }
    }

    tr {
      th:first-child, th:last-child {
        color: #F00 !important;
      }

      th {
        color: #5458FB;
      }
    }
  }
}

.drp-selected {
  display: none !important;
}


.drp-buttons {
  position: absolute !important;
  right: 19px !important;
  bottom: 0 !important;
  border-top: none !important;

  .applyBtn {
    background: #14C8B1 !important;
    border: 1px solid #14C8B1 !important;
    width: 66px !important;
    height: 33px !important;
  }

  .cancelBtn {
    background: #FFFFFF !important;
    border: 1px solid #DEDEEB !important;
    border-radius: 3px !important;
    color: #859DA7 !important;
    width: 66px !important;
    height: 33px !important;
  }
}

.ranges {
  min-width: 168px;

  ul {
    margin: 0 !important;
  }

  li {
    width: 143px !important;
    height: 33px !important;
    border: 1px solid #DEDEEB !important;
    border-radius: 3px !important;
    text-align: center !important;
  }
}
</style>