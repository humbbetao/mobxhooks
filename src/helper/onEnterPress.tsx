import { KeyboardEvent } from "react";
const onEnterPress = (cb: any) => {
    return (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            cb();
        }
    }
};

export default onEnterPress