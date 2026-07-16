import { useState, useEffect, useRef, useCallback } from 'react';

const useFetchData = (fetchFunction, options = {}) => {
    const { filterBy, sortBy, isAscending, userSportType, pageSize, componentKey } = options;
    console.log(userSportType)
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const loadingRef = useRef(false);
    const abortControllerRef = useRef(null);
    const pageNumberRef = useRef(1);
    const [pageNumberTrigger, setPageNumberTrigger] = useState(false);

    const fetchData = useCallback(async () => {
        if (loadingRef.current) return;
        loadingRef.current = true;
        setShowLoading(true);

        try {
            abortControllerRef.current = new AbortController();
            const signal = abortControllerRef.current.signal;
            const response = await fetchFunction({
                pageNumber: pageNumberRef.current,
                pageSize,
                filterBy,
                sortBy,
                isAscending,
                userSportType,
                signal
            });

            setData((prevData) => [...prevData, ...response]);

            if (response.length < pageSize) {
                setHasMore(false);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            loadingRef.current = false;
            setShowLoading(false);
        }
    }, [fetchFunction, filterBy, pageSize, isAscending, sortBy, userSportType]);

    const loadMore = () => {
        pageNumberRef.current += 1;
        setPageNumberTrigger((prev) => !prev);
    };

    useEffect(() => {
        if (!abortControllerRef.current && loadingRef.current) {
            abortControllerRef.current.abort();
        }
        setData([]);
        setHasMore(true);
        setShowLoading(false);

        pageNumberRef.current = 1;
    }, [filterBy, isAscending, sortBy, userSportType]);

    useEffect(() => {
        fetchData().catch((error) => console.error('Error in useEffect:', error));
    }, [pageNumberTrigger, filterBy, fetchData, isAscending, sortBy, userSportType]);

    const removeItem = (itemId) => {
        setData((prevData) => prevData.filter(item => {
            // Handle different ID field names (requestId, id, etc.)
            const id = item.requestId || item.id || item;
            return id !== itemId;
        }));
    };

    return {
        data,
        hasMore,
        showLoading,
        loadMore,
        componentKey,
        removeItem,
    };
};

export default useFetchData;
