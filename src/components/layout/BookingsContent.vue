<template>
    <div class="main-content">
        <div class="container bookings">
            <div class="container-title">
                <span>Booking requests</span>
                <span class="notification">3</span>
            </div>
            <div class="container-nav">
                <span @click="activeTab = 'all'" :class="activeTab == 'all' ? 'content-nav-item is-active' : 'content-nav-item'">All</span>
                <span @click="activeTab = 'active'" :class="activeTab == 'active' ? 'content-nav-item is-active' : 'content-nav-item'">Active</span>
                <span @click="activeTab = 'completed'" :class="activeTab == 'completed' ? 'content-nav-item is-active' : 'content-nav-item'">Completed</span>
                <span @click="activeTab = 'canceled'" :class="activeTab == 'canceled' ? 'content-nav-item is-active' : 'content-nav-item'">Canceled</span>
                <span @click="activeTab = 'declined'" :class="activeTab == 'declined' ? 'content-nav-item is-active' : 'content-nav-item'">Declined</span>
            </div>
            <div class="container-content">
                <table v-show="activeTab == 'all'">
                    <tr class="headings">
                      <th></th>
                      <th></th>
                      <th>Pickup Date</th>
                      <th>Return Date</th>
                      <th></th>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                </table>
                <table v-show="activeTab == 'active'">
                    <tr class="headings">
                        <th></th>
                        <th></th>
                        <th>Pickup Date</th>
                        <th>Return Date</th>
                        <th></th>
                      </tr>
                      <tr>
                          <td>
                            <div class="content-cell">
                                <div class="cell-left">
                                    <img src="/assets/img/booking-request-img.png">
                                </div>
                                <div class="cell-right">
                                    <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                    <div class="right-bottom">
                                        <span>#236589</span>
                                        <span>Ryan Kelly</span>
                                    </div>
                                </div>
                            </div>
                          </td>
                          <td class="row">$1200</td>
                          <td class="row">16.02.2022</td>
                          <td class="row">18.02.2022</td>
                          <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                      </tr>
                      <tr>
                          <td>
                            <div class="content-cell">
                                <div class="cell-left">
                                    <img src="/assets/img/booking-request-img.png">
                                </div>
                                <div class="cell-right">
                                    <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                    <div class="right-bottom">
                                        <span>#236589</span>
                                        <span>Ryan Kelly</span>
                                    </div>
                                </div>
                            </div>
                          </td>
                          <td class="row">$1200</td>
                          <td class="row">16.02.2022</td>
                          <td class="row">18.02.2022</td>
                          <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                      </tr>
                      <tr>
                          <td>
                            <div class="content-cell">
                                <div class="cell-left">
                                    <img src="/assets/img/booking-request-img.png">
                                </div>
                                <div class="cell-right">
                                    <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                    <div class="right-bottom">
                                        <span>#236589</span>
                                        <span>Ryan Kelly</span>
                                    </div>
                                </div>
                            </div>
                          </td>
                          <td class="row">$1200</td>
                          <td class="row">16.02.2022</td>
                          <td class="row">18.02.2022</td>
                          <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                      </tr>
                      <tr>
                          <td>
                            <div class="content-cell">
                                <div class="cell-left">
                                    <img src="/assets/img/booking-request-img.png">
                                </div>
                                <div class="cell-right">
                                    <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                    <div class="right-bottom">
                                        <span>#236589</span>
                                        <span>Ryan Kelly</span>
                                    </div>
                                </div>
                            </div>
                          </td>
                          <td class="row">$1200</td>
                          <td class="row">16.02.2022</td>
                          <td class="row">18.02.2022</td>
                          <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                      </tr>
                      <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                </table>
                <table v-show="activeTab == 'completed'">
                    <tr class="headings">
                      <th></th>
                      <th></th>
                      <th>Pickup Date</th>
                      <th>Return Date</th>
                      <th></th>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                </table>
                <table v-show="activeTab == 'canceled'">
                    <tr class="headings">
                      <th></th>
                      <th></th>
                      <th>Pickup Date</th>
                      <th>Return Date</th>
                      <th></th>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                </table>
                <table v-show="activeTab == 'declined'">
                    <tr class="headings">
                      <th></th>
                      <th></th>
                      <th>Pickup Date</th>
                      <th>Return Date</th>
                      <th></th>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                    <tr>
                        <td>
                          <div class="content-cell">
                              <div class="cell-left">
                                  <img src="/assets/img/booking-request-img.png">
                              </div>
                              <div class="cell-right">
                                  <span class="right-top">Insta360 Pro 2 360 VR camera</span>
                                  <div class="right-bottom">
                                      <span>#236589</span>
                                      <span>Ryan Kelly</span>
                                  </div>
                              </div>
                          </div>
                        </td>
                        <td class="row">$1200</td>
                        <td class="row">16.02.2022</td>
                        <td class="row">18.02.2022</td>
                        <td class="row"><img class="bill" src="/assets/img/bill-black-icon.svg"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

    <script>
export default {
    name: 'ListingsContent',
    data() {
        return {
            activeTab: 'all'
        }
    }
}
</script>


    <style scoped>
    .main-content {
        margin-left: 340px;
        display: flex;
        flex-direction: column;
        padding-bottom: 64px;
    }

    .container.bookings {
        padding: 32px 96px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .container-title {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    .container-title>span:first-child {
        font-size: 44px;
    }

    .notification {
        font-size: 24px;
        font-family: Tarnac;
        background: #FF6644;
        border-radius: 40px;
        padding: 4px 12px;
        color: #fff;
        line-height: 24px;
    }

    .container-nav {
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
        padding: 24px 0;
        gap: 24px;
    }

    .content-nav-item {
        color: rgba(0, 0, 0, 0.64);
        cursor: pointer;
        padding-bottom: 24px;
        margin-bottom: -25px;
        transition: .2s;
    }

    .content-nav-item.is-active {
        color: rgb(255, 102, 68);
        border-bottom: 1px solid rgb(255, 102, 68);
        padding-bottom: 24px;
        margin-bottom: -25px;
    }

    .container-content {
        margin-top: 8px;
    }

    table {
        width: 100%;
        min-height: 650px;
    }

    .headings {
        font-size: 14px;
        font-family: Tarnac;
        text-align: left;
        color: rgba(0, 0, 0, 0.64);
    }

    .content-cell {
        display: flex;
        align-items: center;
        gap: 24px;
        padding-top: 24px;
    }

    .cell-right {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .right-top {
        font-size: 24px;
        font-family: Tarnac;
        max-width: 328px;
    }

    .right-bottom {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        font-family: Tarnac;
        color: rgba(0, 0, 0, 0.64);
    }

    .row {
        padding-top: 24px;
        font-size: 20px;
        font-family: Tarnac;
        vertical-align: top;
        text-align: center;
    }
    </style>
