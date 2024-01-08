function displayUserName(name) {
  const nameElement = document.getElementById('user-name');
  if (nameElement) {
    nameElement.textContent = name;
  }
  console.log(name);
  console.log(test);
}