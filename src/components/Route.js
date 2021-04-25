
import { useEffect, useState } from 'react'

export default ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])
    console.log(currentPath)
    return currentPath === path ? children : null;
}

