const nameInput = document.querySelector('#name-input');
  const nameOutput = document.querySelector('#name-output');

  const updateNameOutput = () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
  };

  
  nameInput.addEventListener('input', updateNameOutput);