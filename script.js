function toggleFilter(header) {
    const filterGroup = header.parentElement;
    const content = filterGroup.querySelector('.filter-content');
    const arrow = header.querySelector('.arrow');
  
    // Toggle visibility
    if (content.style.display === 'block') {
      content.style.display = 'none';
      arrow.classList.remove('active');
    } else {
      content.style.display = 'block';
      arrow.classList.add('active');
    }
  }
  