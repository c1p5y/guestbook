
type MessageEntry = {
    id: number;
    name: string;
    message: string;
    hide: boolean;
    timestamp: Date;
};


export async function saveMessageFromGuest(name: string, message: string, hide: boolean) {
    const url = "http://localhost:3000/api/guestbook";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ name: name, message: message, hide: hide }),
        });
        return { data: await response.json(), error: null };
    } catch (error) {
        console.error("Failed to save message:", error);
        if (error instanceof Error)
            return { error: { message: error.message } };
        return { data: null, error: { message: "Unknown error" } };
    }
}

export async function getLastNEntries(last: number) {
    const url = "http://localhost:3000/api/guestbook?last="+ last;
    try {
        const response = await fetch(url);
        const json = await response.json() as MessageEntry[];
        return { data: json, error: null }
    } catch (error) {
        console.error("Failed to get last " + last + " messages:", error);
        if (error instanceof Error)
            return { error: { message: error.message } };
        return { data: null, error: { message: "Unknown error" } };
    }
}
