import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

export async function GET(req) {
  await dbConnect();

  try {
    const users = await User.find({});
    return new Response(JSON.stringify({ success: true, data: users }), {
      status: 200,
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
