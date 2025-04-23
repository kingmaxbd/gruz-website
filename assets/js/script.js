document.addEventListener('DOMContentLoaded', () => {
    const vehicleType = document.getElementById('vehicleType');
    const tentOptions = document.getElementById('tentOptions');
    const metalOptions = document.getElementById('metalOptions');
    const isRefrigerated = document.getElementById('isRefrigerated');
    const temperatureOption = document.getElementById('temperatureOption');

    vehicleType.addEventListener('change', () => {
        tentOptions.style.display = vehicleType.value === 'tent' ? 'block' : 'none';
        metalOptions.style.display = vehicleType.value === 'metal' ? 'block' : 'none';
    });

    isRefrigerated.addEventListener('change', () => {
        temperatureOption.style.display = isRefrigerated.checked ? 'block' : 'none';
    });
});