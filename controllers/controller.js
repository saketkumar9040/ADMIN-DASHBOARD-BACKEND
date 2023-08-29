import {db} from "../config/dbConfig.js"

export const fetchData = async (req,res) => {
    const data = await db.collection("DATA").find(req.body).toArray();
    // console.log(data)
    return res.json({ status: true, message:"data fetched successfully", data });
}