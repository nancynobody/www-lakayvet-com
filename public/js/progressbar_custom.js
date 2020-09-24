/*
* Custom file used to fill in progress bars on reservation page
*/

const reservationsBar = new ProgressBar.Circle(reservationsContainer, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 2400,
  color: '#ffffff',
  trailColor: '#eee',
  trailWidth: 1,
  text: {
    value: '12<br>Reservations',
    style: {
      color: '#ffffff',
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: 0,
      margin: 0,
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)',
      },
    },
  },
  svgStyle: null,
});

const reservedBar = new ProgressBar.Circle(reservedContainer, {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 2400,
  color: '#ffffff',
  trailColor: '#eee',
  trailWidth: 1,
  text: {
    value: '$224,000<br>Reserved',
    style: {
      color: '#ffffff',
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: 0,
      margin: 0,
      transform: {
        prefix: true,
        value: 'translate(-50%, -50%)',
      },
    },
  },
  svgStyle: null,
});

reservationsBar.path.style.strokeLinecap = 'round';
reservationsBar.animate(1.0);  // Number from 0.0 to 1.0

reservedBar.path.style.strokeLinecap = 'round';
reservedBar.animate(0.8);
