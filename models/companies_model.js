const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    bse_companies:{
      sensex:String,
      companies_listed:[{
         c_id:String,
      c_name:String,
      date: String,
      c_share_prices:{
        current_share_price:String,
        previous_prices:[{
          day:String,
          morning_price:String,
          afternone_price:String,
          evening_price:String
        },{
          day:String,
          morning_price:String,
          after_none_price:String,
          evening_price:String
        },{
          day:String,
          morning_price:String,
          after_none_price:String,
          evening_price:String
        },{
          day:String,
          morning_price:String,
          after_none_price:String,
          evening_price:String
          
        }
        ]
      },
      gmt_time:[String,String,String],
      open:String,
      heigh:String,
      low:String,
      mkt_cap:String,
      pe_ration:String,
      Div_yield:String,
      prev_close:String,
      week_heigh:String,
      week_low:String,
      
      }],
      trading_time:String
    },
    nse_companies:{
      nifty:String,
      companies_listed:[{
         c_id:String,
      c_name:String,
      date: String,
      c_share_prices:{
        current_share_price:String,
        previous_prices:[{
          day:String,
          morning_price:String,
          afternone_price: String,
          evening_price:String
        },{
          day:String,
          morning_price:String,
          after_none_price:String,
          evening_price:String
        },{
          day:String,
          morning_price:String,
          after_none_price:String,
          evening_price:String
        },{
          day:String,
          morning_price:String,
          after_none_price:String,
          evening_price:String
          
        }
        ]
      },
      gmt_time:[String,String,String],
      open:String,
      heigh:String,
      low:String,
      mkt_cap:String,
      pe_ration:String,
      Div_yield:String,
      prev_close:String,
      week_heigh:String,
      week_low:String
      
      }],
      trading_time:String
    }
  })

  module.exports=mongoose.model('company',schema)