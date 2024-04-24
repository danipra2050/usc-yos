export const showError = (fieldName, errors) => {
    let error = errors[fieldName];
    return error ? (
        <div style={{ color: "red", fontWeight: "bold" }}>
        {error.message || "El campo es obligatorio."}
      </div>
    ) : null;
}