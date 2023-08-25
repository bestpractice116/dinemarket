import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "../../../../Database/Drizzle";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db.insert(cartTable).values({
      user_id: req.user_id,
      product_id: req.product_id,
      product_title: req.product_title,
      image_url: req.image_url,
      product_price: req.product_price,
      product_quantity: req.product_quantity,
    })
    .onConflictDoUpdate({
      target:[cartTable.product_title],
      set: {
        product_quantity:req.product_quantity,
        product_price: req.product_price,
      },
    })   
    .returning();
    console.log("Data Posted To Database");
    return NextResponse.json({res})
  }
  catch (err) {
    console.log("Error While Posting to Database");
    console.log("Error", err)
    return NextResponse.json({message: "Something went wrong"})
  }
}