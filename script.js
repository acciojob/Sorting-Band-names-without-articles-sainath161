//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'The Rolling Stones', 'Queen', 'Nirvana'];

// Function to sort band names in lexicographic order excluding articles
function sortBandNames(names) {
  return names.sort((a, b) => {
    // Function to remove articles ('a', 'an', 'the') and trim whitespace
    const removeArticles = (str) => str.replace(/^(a|an|the)\s+/i, '').trim();
    
    // Compare band names without articles in a case-insensitive manner
    const nameA = removeArticles(a).toLowerCase();
    const nameB = removeArticles(b).toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Sort the band names
const sortedBandNames = sortBandNames(bandNames);

// Function to create and display the sorted list in the 'band' ul element
function displaySortedBandNames(names) {
  const bandList = document.getElementById('band');
  
  names.forEach((name) => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
}

// Call the function to display the sorted list
displaySortedBandNames(sortedBandNames);
