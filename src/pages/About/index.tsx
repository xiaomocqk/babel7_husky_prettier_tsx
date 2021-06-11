import React from 'react';

import useGlobal from '../../store/useGlobal';

export default function About() {
    const globalState = useGlobal();

    console.log('About', globalState);

    return <div>About</div>;
}
