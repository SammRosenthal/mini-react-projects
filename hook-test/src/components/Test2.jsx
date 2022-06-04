import {useTest} from '../hooks/useTest';

export function TestTwo() {
    const [data, setData] = useTest();

    return (
        <div>{data}</div>
    );
}

export default TestTwo;