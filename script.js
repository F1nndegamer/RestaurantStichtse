document.getElementById('dinner-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Bedankt voor uw aanmelding! Wij nemen spoedig contact met u op.');
    this.submit();
});
