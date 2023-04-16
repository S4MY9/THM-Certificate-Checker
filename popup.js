document.getElementById('validateButton').addEventListener('click', () => {
  const certificateID = document.getElementById('certificateID').value;
  if (!certificateID) return;

  const url = `https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/${certificateID}.png`;

  const result = document.getElementById('result');

  const img = document.createElement('img');
  img.src = url;
  img.style.display = 'none';
  img.onerror = () => {
    result.textContent = 'Invalid certificate';
    result.style.color = 'red';
  };
  img.onload = () => {
    result.textContent = 'Valid certificate: ';
    result.style.color = 'green';
    const link = document.createElement('a');
    link.href = url;
    link.textContent = 'View certificate';
    link.target = '_blank';
    result.appendChild(link);
  };
  result.appendChild(img);
});
