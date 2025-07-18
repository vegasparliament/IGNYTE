"use server"

import { revalidatePath } from "next/cache"

export async function submitServiceRequest(formData: FormData) {
  // In a real application, you would process the form data here
  // For example, you might save it to a database or send it to an API

  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const company = formData.get("company")
  const message = formData.get("message")

  console.log("Service request received:", {
    firstName,
    lastName,
    email,
    phone,
    company,
    message,
    // Add any additional fields here
  })

  // Simulate a delay to mimic processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you might want to revalidate the page or redirect
  revalidatePath("/")

  return { success: true, message: "Your request has been submitted successfully." }
}
