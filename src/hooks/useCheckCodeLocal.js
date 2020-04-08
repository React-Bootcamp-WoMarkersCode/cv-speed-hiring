import {useEffect, useState} from 'react';

const useCheckCodeLocal = (id) => {
    const [isCode,  setIsCode] = useState(false);

    useEffect(() => {
        const checkCodeLocal = () => {
            const localCode = localStorage.getItem(id);

            if(localCode) {
                setIsCode(true);
            }
        }

        checkCodeLocal();
    },[id]);

    return isCode;
}

export default useCheckCodeLocal;