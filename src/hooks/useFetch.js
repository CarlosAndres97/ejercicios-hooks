import { useEffect, useState } from "react";

const localCache = {};

/**
 * Hook personalizado para realizar peticiones HTTP y manejar el estado de la respuesta.
 *
 * @param {string} url - La URL a la que se realizará la petición.
 * @returns {Object} Un objeto con las siguientes propiedades:
 * - data: Los datos obtenidos de la petición.
 * - isLoading: Indica si la petición está en curso.
 * - hasError: Indica si hubo un error en la petición.
 *
 * @example
 * const { data, isLoading, hasError } = useFetch('https://api.example.com/data');
 *
 * @typedef {Object} State
 * @property {any} data - Los datos obtenidos de la petición.
 * @property {boolean} isLoading - Indica si la petición está en curso.
 * @property {boolean} hasError - Indica si hubo un error en la petición.
 * @property {Object|null} error - Información del error si hubo un error en la petición.
 */

//Se define el hook useFetch que toma una URL como parámetro
export const useFetch = (url) => {

//Inicializo el estado con useState mandandole como estado inicial un objeto "{}" que contiene data, isLoading, hasError y error  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });
//El hook de React useEffect se ejecuta cuando la URL cambia llamando a la función getFetch
  useEffect(() => {
    getFetch();
  }, [url]);
//Aquí se establece el estado de "Carga" del componente
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };
//esta es una función asíncrona que obtiene los datos del URL
  const getFetch = async () => {
    //Si la URL ya fué consultada se toma la data del caché local
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }
    //Se establece el estado de carga antes de hacer la petición
    setLoadingState();
    //Se hace la petición fetch a la URL
    const response = await fetch(url);
    //Se retrasa la respuesta 
    await new Promise((resolve) => setTimeout(resolve, 1500));
    //Si no es correcta, actualizamos el estado con el error
    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: response.status,
          message: response.statusText,
        },
      });
      return;
    }
    //Si la respuesta es ok, convertimos los datos a JSON
    const data = await response.json();
    //Actualizamos el estado con los datos obtenidos
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    //Guardamos los datos en caché
    localCache[url] = data;
  };
  //Retornamos el estado actual
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
