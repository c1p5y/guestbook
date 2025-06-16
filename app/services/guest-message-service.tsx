export async function saveMessageFromGuest(name: string, message: string, hide: boolean) {
    const url = "/api/guestbook";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ name: name, message: message, hide: hide}),
        });
        return { data: await response.json(), error: null };
    } catch (error) {
        console.error("Failed to save messade:", error);
        if (error instanceof Error) 
            return { error: { message: error.message } };
        return { data: null, error: { message: "Unknown error" } };
    }
}