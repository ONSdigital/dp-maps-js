/** @internal */
export const request = async (url: string): Promise<any> => {
    const headers = {
        "Content-Type": "application/json",
    }
    const res = await fetch(url, {
        headers,
    });
    const data = await res.json();
    return data;
};
