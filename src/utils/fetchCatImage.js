export const fetchCatImage = (url, cat, setErrorStatus, setImg, setLoading) => {

    const waitTime = 2000;

    try {
        const fetchImage = async () => {
            const res = await fetch(url);

            if (res.status < 200 || res.status >= 300) {
            setErrorStatus(res.status);
            }

            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);

            setImg(imageObjectURL);
            setLoading(false);
        }

        if (cat !== '') {
            setLoading(true);
            setImg(null);
            setErrorStatus(null);
        }

        const catTimer = setTimeout(() => fetchImage(), waitTime);
        return () => clearInterval(catTimer);

        } catch(err) {
        console.log(err.message);
        }
}