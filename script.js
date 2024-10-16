<script>
    document.addEventListener('DOMContentLoaded', function () {
        const selectElement = document.getElementById('guests');

        // Function to update the color based on selected option
        function updateSelectColor() {
            if (selectElement.value === "") {
                selectElement.style.color = '#9e9e9e'; // Placeholder color
            } else {
                selectElement.style.color = 'black'; // Black color for other options
            }
        }

        // Set initial color
        updateSelectColor();

        // Add event listener for change event
        selectElement.addEventListener('change', updateSelectColor);
    });
</script>
