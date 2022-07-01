import React from 'react';
import { useRouter } from 'next/router';


const Auth = () => {
    const router = useRouter();
    const { folder } = router.query;
    return (
        <><div>{folder}</div><div>sadasdasdasd</div></> 
      );
};

export default Auth;