
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !message?.trim()
    ) {
      return Response.json(
        { success: false, error: 'Please fill in all fields.' },
        { status: 400 }
      );
    }

    // No emails are sent or stored.
    return Response.json(
      {
        success: true,
        message: 'Thank you! Your form has been submitted successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }
}
