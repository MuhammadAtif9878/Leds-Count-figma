
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = [document.getElementById('toggleSidebar1'), document.getElementById('toggleSidebar2')];
  const sidebar = document.getElementById('sidebar');
  const mainContentWrapper = document.getElementById('mainContentWrapper');
  let isSidebarOpen = false;

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      isSidebarOpen = !isSidebarOpen;

      if (isSidebarOpen) {
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');
        mainContentWrapper.classList.add('mr-0');
      } else {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        mainContentWrapper.classList.remove('mr-0');
      }
    });
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (event) => {
    if (isSidebarOpen && !sidebar.contains(event.target) && !toggleButtons.some(button => button.contains(event.target))) {
      isSidebarOpen = false;
      sidebar.classList.remove('translate-x-0');
      sidebar.classList.add('translate-x-full');
      mainContentWrapper.classList.remove('mr-0');
    }
  });
});



const brightnessSlider = document.getElementById('brightness');
const body = document.getElementById('body');

brightnessSlider.addEventListener('input', function() {
  const brightnessValue = brightnessSlider.value;
  body.style.backgroundColor = `rgb(${brightnessValue * 2.55}, ${brightnessValue * 2.55}, 255)`;
});


const slider = document.getElementById('brightness');
const output = document.getElementById('brightness-value');
slider.addEventListener('input', function() {
    output.textContent = slider.value;
});






if (brightnessValue == 0) {
    container.style.backgroundColor = "#002395";
  } else if (brightnessValue == 100) {
    container.style.backgroundColor = "white";
  } else {
    container.style.backgroundColor = `rgb(${brightnessValue}, ${brightnessValue}, ${brightnessValue})`;
  }

  
  



