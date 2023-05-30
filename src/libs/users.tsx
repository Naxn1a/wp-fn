export default async (username: string, password: string, path: string) => {
    const data = await fetch(`${process.env.SERVER}/user/${path}`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        return data
    });
    return data
};
