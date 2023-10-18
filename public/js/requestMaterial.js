function requestMaterial(materialId, quantity) {
    fetch("/request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-CSRF-Token": document.querySelector("input[name=_token]").value,
        },

        body: JSON.stringify({
            material_id: materialId,
            quantity: quantity,
        }),
    });
}
