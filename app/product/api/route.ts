import {query} from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: any) {
    const sql = "SELECT * FROM Products ORDER BY Id DESC";
    const result = await query(sql, "");

    try {
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(error);
    }
}
export async function POST(req: NextRequest) {
    const data = await req.formData();

    const sql = `
        INSERT INTO Products
        (
            Name,
            BuyPrice,
            SellPrice
        )
        VALUES (?, ?, ?)
    `;

    const values = [
        data.get("name" || ""),
        data.get("buyPrice" || ""),
        data.get("sellPrice" || ""),
    ];

    try {
        await query(sql, values);

        return NextResponse.json({
            status: "success",
            message: "Successfully created",
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            status: "error",
            message: "Error processing creation",
            error,
        });
    }
}