import { useEffect, useRef } from "react";

export default function useElementOnScreen(options, onVisibilityChanged) {
    const containerRef = useRef(null)

    const callbackFunction = (entries) => {
        const [entry] = entries
        onVisibilityChanged(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)

        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return containerRef
}