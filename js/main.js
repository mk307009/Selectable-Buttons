document.addEventListener('DOMContentLoaded', function() {

  var foo = new Selectables({
    elements: 'a, button',
    selectedClass: 'active',
    zone: '#zone1'
  });
  
/*  var bar2 = new Selectables({
    elements: 'a,button',
    selectedClass: 'active',
    zone: '#zone1',
    onSelect:function(element) {
      console.log("onSelect");
	  console.log(element);
    },
    start:function(element) {
      console.log("start");
    }
  });
*/

  var bar = new Selectables({
    elements: 'a',
    selectedClass: 'active',
    zone: '#zone1',
    key: 'altKey',
    start: function(e) {
      if (!e.altKey) {
        document.getElementById('alt').style.fontWeight = 'bold';
        setTimeout(function() {
          document.getElementById('alt').style.fontWeight = ''
        }, 2000);
      }
    }
  });
});

document.getElementById("zone1").addEventListener('touchstart', touch2Mouse, false);
document.getElementById("zone1").addEventListener('touchmove', touch2Mouse, false);
document.getElementById("zone1").addEventListener('touchend', touch2Mouse, false);
/*document.getElementById("zone1").addEventListener('touchcancel', process_touchmove);*/
document.getElementById("zone1").addEventListener('mouseup', release_action);

function release_action(ev) {
  // Set call preventDefault()
  console.log("release");
  console.log(ev);
  
  ev.preventDefault();
}

function process_touchmove(ev) {
  // Set call preventDefault()
  console.log(ev);
  
  ev.preventDefault();
}

function process_touchstart(ev) {
  // Set call preventDefault()
  
 ev.preventDefault();
  console.log("start t");
  console.log(ev);
}

function process_touchend(ev) {
  // Set call preventDefault()
  ev.preventDefault();
  console.log("end t");
  console.log(ev);
  const touches = ev.changedTouches;
  for (let i = 0; i < touches.length; i++) {
   console.log(touches[i].identifier);
}

}

function touch2Mouse(e) {
  var theTouch = e.changedTouches[0];
  var mouseEv;

  switch(e.type)
  {
    case "touchstart": {
	  mouseEv="mousedown";
	  console.log(e.type);
	  console.log(e);
	} break;  
    case "touchend": {
		mouseEv="mouseup";
		console.log(e.type);
		console.log(e);
	} break;
    case "touchmove": {
		mouseEv="mousemove";
	} break;
    default: return;
  }

  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  theTouch.target.dispatchEvent(mouseEvent);

  e.preventDefault();
}