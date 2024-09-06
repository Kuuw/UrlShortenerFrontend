import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from '@/pages/notfound';

function Redirect() {
    const { shortUrl } = useParams();
    const [status, setStatus] = useState(200);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5169/api/Url?shortenedUrl=${shortUrl}`);
                if (response.status === 404) {
                    setStatus(404);
                } else {
                    const data = await response.json();
                    window.location.href = data.url;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [shortUrl]);

    if (status === 404) {
        return <NotFoundPage />;
    }

    return null;
}

export default Redirect;