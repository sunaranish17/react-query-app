import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Planet from './Planet';

const queryClient = new QueryClient();

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/', { mode: 'cors' });
    return res.json();
}

function Plantes() {
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log("Data>>", data);

    return (
        <div>
            <h2>Planets.</h2>

            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>Error fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
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

export default HOF(Plantes)
