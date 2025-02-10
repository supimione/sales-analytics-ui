import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const newUser = await User.create(body);

    return new Response(JSON.stringify({ success: true, data: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
