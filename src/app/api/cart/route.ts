import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "../../../../Database/Drizzle";
import { cookies } from "next/headers";
import { v4 } from "uuid";
import { eq } from "drizzle-orm"
export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const setCookies = cookies();
  const uid = v4();
  const user_id = setCookies.get("user_id")?.value as string;
  if (!user_id) {
    setCookies.set("user_id", uid);
  }
  try {
    const res = await db
      .insert(cartTable)
      .values({
        user_id: user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
      })
      .onConflictDoUpdate({
        target: [cartTable.product_title],
        set: {
          product_quantity: req.product_quantity,
          product_price: req.product_price,
        },
      })
      .returning();
    console.log("Data Posted To Database");
    return NextResponse.json({ res });
  } catch (err) {
    console.log("Error While Posting to Database");
    console.log("Error", err);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const GET = async (request: NextRequest) => {
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid));

    const responseData = res.map(item => ({
      user_id: item.user_id,
      product_id: item.product_id,
      product_title: item.product_title,
      image_url: item.image_url,
      product_price: item.product_price,
      product_quantity: item.product_quantity,
    }));

    return NextResponse.json(responseData);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
};
