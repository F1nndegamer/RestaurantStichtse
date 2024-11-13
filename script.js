// Get the elements
const noAllergiesCheckbox = document.getElementById('noAllergies');
const otherAllergyCheckbox = document.getElementById('otherAllergy');
const otherAllergyText = document.getElementById('otherAllergyText');
const allergyCheckboxes = document.querySelectorAll('.allergies input[type="checkbox"]:not(#noAllergies, #otherAllergy)');

// Handle the "Geen Allergieën" checkbox
noAllergiesCheckbox.addEventListener('change', () => {
    const isChecked = noAllergiesCheckbox.checked;
    
    // Disable all other allergy checkboxes when "Geen Allergieën" is checked
    allergyCheckboxes.forEach(checkbox => checkbox.disabled = isChecked);

    // Also disable "Andere" checkbox when "Geen Allergieën" is checked
    otherAllergyCheckbox.disabled = isChecked;

    // Uncheck all and disable other allergy options
    if (isChecked) {
        allergyCheckboxes.forEach(checkbox => checkbox.checked = false);
        otherAllergyCheckbox.checked = false;
        otherAllergyText.value = '';
        otherAllergyText.disabled = true;
        otherAllergyText.style.display = 'none';  // Hide "Specify" input
    }
});

// Enable/disable text input for "Andere" allergy and toggle visibility
otherAllergyCheckbox.addEventListener('change', () => {
    const isChecked = otherAllergyCheckbox.checked;
    otherAllergyText.disabled = !isChecked;
    otherAllergyText.style.display = isChecked ? 'inline' : 'none';  // Show/hide based on checkbox state
    
    if (!isChecked) {
        otherAllergyText.value = '';  // Clear the text if unchecked
    }
});

// Handle Diner Preference Checkbox
const dinerPreferenceCheckbox = document.getElementById('dinerPreferenceCheckbox');
const dinerPreferenceSelects = [
    document.getElementById('dinerPreference1'),
    document.getElementById('dinerPreference2'),
    document.getElementById('dinerPreference3')
];

dinerPreferenceCheckbox.addEventListener('change', () => {
    const isChecked = dinerPreferenceCheckbox.checked;
    
    // Show/hide the select inputs based on the checkbox state
    dinerPreferenceSelects.forEach(select => {
        select.disabled = !isChecked;
        select.style.display = isChecked ? 'inline' : 'none'; // Show if checked, hide if unchecked
    });
    
    // Optionally clear the selections when unchecked
    if (!isChecked) {
        dinerPreferenceSelects.forEach(select => select.value = '');
    }
});

// Handle the transfer of data from index.html to preferences.html
window.onload = function() {
    // Check if the data exists in localStorage (from index.html)
    if (localStorage.getItem('firstName')) {
        document.getElementById('firstFromIndex').value = localStorage.getItem('firstName');
        document.getElementById('kindFromIndex').value = localStorage.getItem('kindName');
        document.getElementById('guestsFromIndex').value = localStorage.getItem('guestsCount');
        document.getElementById('emailFromIndex').value = localStorage.getItem('emailAddress');
        document.getElementById('messageFromIndex').value = localStorage.getItem('message');
    }
};

// Store form data from index.html to localStorage when user clicks submit or navigates to preferences.html
document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow storing data in localStorage
    
    // Store form data from index.html to localStorage
    localStorage.setItem('firstName', document.getElementById('first').value);
    localStorage.setItem('kindName', document.getElementById('kind').value);
    localStorage.setItem('guestsCount', document.getElementById('guests').value);
    localStorage.setItem('emailAddress', document.getElementById('email').value);
    localStorage.setItem('message', document.getElementById('message').value);

    // Optionally, submit the form after storing data
    this.submit();  // Allow form submission after storing data
});
