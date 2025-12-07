"use server";

import { Resend } from "resend";

import { validateString, getErrorMessage } from "@/lib/utils";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("message");

	const apiKey = process.env.RESEND_API_KEY;

	if (!apiKey) {
		throw new Error("RESEND_API_KEY non è definita nelle env");
	}

	const resend = new Resend(apiKey);

	// Validate the server side data
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}

	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: "PORTFOLIO <onboarding@resend.dev>",
			to: "stefano.valenti2000@gmail.com",
			subject: "Nuovo Messaggio dal Modulo di Contatto Sul Portfolio!",
			reply_to: senderEmail as string,
			text: message as string,
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}
	return {
		data,
	};
};
