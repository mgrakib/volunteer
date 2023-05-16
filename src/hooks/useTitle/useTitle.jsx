import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Volunteer`;
    }, [title])
}


export default useTitle;