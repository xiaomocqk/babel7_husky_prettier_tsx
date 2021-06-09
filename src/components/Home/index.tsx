import React, {
    PureComponent, useCallback, useMemo, useState,
} from 'react';

const MemoChildC = React.memo(ChildC);

class PureChildF extends PureComponent {
    render() {
        console.log('PureChildF render:PureComponent');

        return <p>我是 PureChildF</p>;
    }
}

export default function Home() {
    return (
        <Parent>
            <ChildB />
        </Parent>
    );
}

function Parent(props: { children: any }) {
    const { children } = props;
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
