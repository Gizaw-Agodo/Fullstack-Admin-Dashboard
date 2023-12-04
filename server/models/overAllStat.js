import mongoose from "mongoose";

const overAllStatSchema = new mongoose.Schema(
  {
    totalCustomers : Number, 
    yearlySalesTotal : Number, 
    yearlyTotalSoldUnits: Number, 
    year:Number, 
    monthlyData: [
        {
            month:String, 
            totalSales:String, 
            totalUnits:String
        }
    ], 
    dailyData: [
        {
            date:String, 
            totalSales:String, 
            totalUnits:String
        }
    ], 

    salesByCategory: {
        type: Map, 
        of: Number
    }
   
  },
  { timestamps: true }
);
const OverAllStat = mongoose.model("OverAllStat", overAllStatSchema)
export default OverAllStat;