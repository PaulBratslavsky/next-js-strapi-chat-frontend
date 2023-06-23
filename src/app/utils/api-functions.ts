export async function createNewChat() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/open-agi/memory-chat`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllChatSessions() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/open-agi/get-all-sessions`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteChatSession(sessionId: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/open-agi/delete-session-by-id/${sessionId}`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function getSessionById(sessionId: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/open-agi/get-session-by-id/${sessionId}`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function sendMessage(data: any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/open-agi/memory-chat`;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}