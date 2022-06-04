import useTest from '../hooks/useTest';

export function TestOne() {
    const [data, setData] = useTest();

    return (
        <>
            <div>{data}</div>
            <input onChange={(e) => setData(e.target.value)}></input>
        </>
    );
}

export default TestOne;