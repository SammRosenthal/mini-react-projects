import {useState} from 'react';

export function useTest() {
    const [data, setData] = useState("init");

    return [data, setData];
}


export default useTest;