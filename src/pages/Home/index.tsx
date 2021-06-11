import React, { PureComponent, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import useGlobal, { GlobalContext, globalState } from '../../store/useGlobal';

const MemoChildC = React.memo(ChildC);

class PureChildF extends PureComponent {
    render() {
        console.log('PureChildF render:PureComponent');

        return <p>我是 PureChildF</p>;
    }
}

export default function Home() {
    return (
        <GlobalContext.Provider value={globalState}>
            <Parent>
                <ChildB />
                <Link to="/about">链接</Link>
            </Parent>
        </GlobalContext.Provider>
    );
}

function Parent(props: { children: any }) {
    const { children } = props;
    const globalState = useGlobal();

    console.log('globalState', globalState);
    const [couter, setCouter] = useState(10);
    const UseMemoChildD = useMemo(() => ChildD, []);
    const UseCallbackChildE = useCallback(ChildE, []);

    return (
        <div>
            <p>{couter}</p>
            <button
                onClick={() => {
                    console.log('=======');
                    setCouter((c) => c + 1);
                }}
            >
                +1
            </button>
            <ChildA />
            {children}
            <MemoChildC />
            <UseMemoChildD />
            <UseCallbackChildE />
            <PureChildF />
        </div>
    );
}

function ChildA() {
    console.log('childA render:FC');

    return <p>我是 ChildA</p>;
}
function ChildB() {
    console.log('childB render:props.child');

    return <p>我是 ChildB</p>;
}
function ChildC() {
    console.log('childC render:React.memo');

    return <p>我是 ChildC</p>;
}
function ChildD() {
    console.log('childD render:useMemo');

    return <p>我是 ChildD</p>;
}
function ChildE() {
    console.log('childE render:useCallback');

    return <p>我是 ChildE</p>;
}
