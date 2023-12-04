import OverAllStat from "../models/overAllStat.js"

export const getSales = async (req, res)=>{
    try {
        const overAllSales = await OverAllStat.find({})
        res.status(200).json(overAllSales)

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}