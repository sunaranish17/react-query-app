import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient();

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/', { mode: 'cors' });
    return res.json();
}

function Plantes() {
    const { data, status } = useQuery('planets', fetchPlanets);
    console.log("Data>>", data)
    return (
        <div>
            <h2>This is planet.</h2>
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
