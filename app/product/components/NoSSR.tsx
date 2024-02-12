import { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export default function NoSSR({ children }: Props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? <>{children}</> : null;
}
