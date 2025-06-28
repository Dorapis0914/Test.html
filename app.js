function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details) {
        details.open = !details.open;
    }
}