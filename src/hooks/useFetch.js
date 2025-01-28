import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../services/API_URL';

const useFetch = (url, apiCallBody) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data from URL:', url); // Add this line for debugging
                let response;
                if (url.includes('categories')) {
                    response = await axios.get(`${API_URL}/categories`);
                } else if (url.includes('category')) {
                    response = await axios.get(`${API_URL}/${url}`);
                } else if (url.includes('item')) {
                    response = await axios.get(`${API_URL}/${url}`);
                }
                else if (url.includes('all_cart')) {
                    response = await axios.post(`${API_URL}/${url}`, apiCallBody);
                }
                else if (url.includes('all_orders')) {
                    response = await axios.get(`${API_URL}/${url}`);
                }
                else if (url.includes('hot_items')) {
                    response = await axios.get(`${API_URL}/${url}`);
                }
                else if (url.includes('table_orders')) {
                    response = await axios.post(`${API_URL}/${url}`, apiCallBody);
                }
                else if (url.includes('feedback_post')) {
                    response = await axios.post(`${API_URL}/${url}`, apiCallBody);
                }
                else {
                    response = await axios.get(`${process.env.PUBLIC_URL}${url}`);
                }
                console.log('Response Data:', response.data); // Add this line for debugging
                setData(response.data);
            } catch (err) {
                console.error('Fetch Error:', err); // Add this line for debugging
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
