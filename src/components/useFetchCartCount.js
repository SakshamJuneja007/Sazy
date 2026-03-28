const fetchCartCount = async () => {
    try {
        const userId = auth.currentUser?.uid;
        if (userId) {
            const cartDoc = doc(db, "carts", userId);
            const cartData = await getDoc(cartDoc);
            if (cartData.exists()) {
                setCartCount(cartData.data().count || 0);
            } else {
                // Create a new cart document if it doesn't exist
                await setDoc(cartDoc, { count: 0 });
                setCartCount(0); // Explicitly set cart count
            }
        } else {
            console.warn("No authenticated user found.");
        }
    } catch (error) {
        console.error("Error fetching cart count:", error.message);
    }
};

const updateCartCount = async (newCount) => {
    try {
        const userId = auth.currentUser?.uid;
        if (userId) {
            const cartDoc = doc(db, "carts", userId);
            await updateDoc(cartDoc, { count: newCount });
            setCartCount(newCount); // Update local state immediately
        }
    } catch (error) {
        console.error("Error updating cart count:", error.message);
    }
};
