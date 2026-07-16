import { useCallback } from 'react';
import useFetchData from './useFetchData.js';
import { trainerAPI } from '../services/api.js';

const useUsersFetch = (filterBy, sortBy, isAscending, userSportType, pageSize, componentKey) => {
    const fetchFunction = useCallback(async ({ pageNumber, pageSize, filterBy, sortBy, isAscending, userSportType, signal }) => {
        return await trainerAPI.getAll(
            {
                pageNumber,
                pageSize,
                filterBy,
                sortBy,
                isAscending,
                userSportType,
                includePhoto: false,
            },
            { signal }
        );

    }, []);

    return useFetchData(fetchFunction, { filterBy, sortBy, isAscending, userSportType, pageSize, componentKey });
};

export default useUsersFetch;
