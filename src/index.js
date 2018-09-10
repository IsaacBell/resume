import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './index.scss';
import App from './App';
import $ from 'jquery';
import Trianglify from 'trianglify';
import registerServiceWorker from './registerServiceWorker';
import 'foundation-sites';

// Chirs Coyer Resizing
var resizeTimer;

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();

let background = () => {
  var leftSide = document.getElementById('left-side');
  var pattern = Trianglify({
    height: leftSide.clientHeight,
    width: leftSide.clientWidth,
    cell_size: 250,
    x_colors: ['#3B5168', '#364b60', '#3F5870', '#445E79', '#496481', '#4D6B89', '#527191']
  });
  leftSide.setAttribute('style', 'background-image: url\(' + pattern.png() + '\)');
}

$(document).foundation();

$('.do-toggle').click(function() {
  $(this).closest('.toggle-title').next().slideToggle();
  if ($(this).find('i').hasClass('fa-chevron-up')) {
    $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
  } else {
    $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    if ($(this).closest('#left-side').length > 0) {
      setTimeout(background, 500);
    }
  }
});

$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(background, 250);
});
