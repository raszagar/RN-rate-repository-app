import React, { useEffect, useState } from "react";

/**
 * Este hook se encarga de obtener los repositorios de la API (rest)
 */

const URL_API = 'http://192.168.1.16:5000/api/';

const useRepositories = () => {
    const [repositories, setRepositories] = useState([]);

    const fetchRepositories = async () => {
        const response = await global.fetch('http://192.168.1.16:5000/api/repositories');
        const json = await response.json();
        //console.log(json);
        setRepositories(json);
    }

    useEffect(() => {
        fetchRepositories();
    }, []);

    const repositoriesNodes = repositories
        ? repositories.edges?.map(edge => (edge.node))
        : [];

    console.log(repositoriesNodes);

    return { repositories: repositoriesNodes };
}

export default useRepositories;
