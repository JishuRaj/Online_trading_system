const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username:String,
  password: String,
  profile_photo: String,
  email: String,
  age: Number,
  my_companies: [
    {
      id: String,
      c_name: String,
      date: String,
      c_share_prices: {
        current_share_price: String,
        previous_prices: [
          {
            day: String,
            morning_price: String,
            afternone_price: String,
            evening_price: String,
          },
          {
            day: String,
            morning_price: String,
            afternone_price: String,
            evening_price: String,
          },
          {
            day: String,
            morning_price: String,
            afternone_price: String,
            evening_price: String,
          },
          {
            day: String,
            morning_price: String,
            afternone_price: String,
            evening_price: String,
          },
        ],
      },
      gmt_time: Array,
      open: String,
      heigh: String,
      low: String,
      mkt_cap: String,
      pe_ration: String,
      Div_yield: String,
      prev_close: String,
      week_heigh: String,
      week_low: String,
    },
  ],
  stocks: [
    {
      id: String,
      s_name: String,
      buy_price: String,
      current_price: String,
      number_of_share: String,
    },
  ],
  wallet: String,
})


module.exports = mongoose.model("user", schema)