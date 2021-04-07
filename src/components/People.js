import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Planet from './Planet';

const queryClient = new QueryClient();

const fetchPeople = async () => {
    const res = await fetch('http://swapi.dev/api/people/', { mode: 'cors' });
    return res.json();
}

function People() {
    const { data, status } = useQuery('people', fetchPeople);
    console.log("Data>>", data);

    return (
        <div>
            <h2>People.</h2>

            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map(person => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}
        </div>
    )
}

//Higher Order Component
const HOF = (WrappedComponent) => {
    return (props) => (
        <QueryClientProvider client={queryClient}>
            <WrappedComponent {...props} />
        </QueryClientProvider>
    )
}

export default HOF(People)
