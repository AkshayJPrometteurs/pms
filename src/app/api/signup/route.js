import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        // Parse JSON body
        const { full_name, email, password, user_type } = await req.json();

        console.log(`${full_name} ${email} ${password} ${user_type}`);

        if (!full_name || !email || !password || !user_type) {
            return new Response(
                JSON.stringify({ message: "All fields are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store user in the database
        const user = await prisma.user.create({
            data: {
                full_name,
                email,
                password: hashedPassword,
                user_type,
            },
        });

        return new Response(
            JSON.stringify({ message: "User registered successfully", userId: user.id }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Database error", error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
