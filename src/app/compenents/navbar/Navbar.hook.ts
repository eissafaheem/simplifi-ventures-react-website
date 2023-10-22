import { useRef } from "react"

export const useNavbarHook = () => {

    const menuRef = useRef<HTMLImageElement>(null);
    const closeRef = useRef<HTMLImageElement>(null);
    const menuItemsRef = useRef<HTMLDivElement>(null);

    function handleMenuClick() {
        if (menuRef.current && closeRef.current && menuItemsRef.current) {
            menuRef.current.style.display = "none";
            closeRef.current.style.display = "block";
            menuItemsRef.current.style.display = "flex";
        }
    }

    function handleCloseClick(event: any) {
        if (menuRef.current && closeRef.current && menuItemsRef.current) {
            menuRef.current.style.display = "block";
            closeRef.current.style.display = "none";
            menuItemsRef.current.style.display = "none";
        }

    }

    return {
        menuRef,
        closeRef,
        menuItemsRef,
        handleMenuClick,
        handleCloseClick
    }
}