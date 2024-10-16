<script>
    document.addEventListener('DOMContentLoaded', function () {
        const selectElement = document.getElementById('guests');
        // Set initial color
        updateSelectColor();

        // Add event listener for change event
        selectElement.addEventListener('change', updateSelectColor);
    });
</script>
