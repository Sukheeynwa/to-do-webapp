/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*
Sidebar, header, main gesen undsen 3 hesgees app butne

Sidebar dotor inbox, today, upcoming gesen undsen 3 object baina. Edgeer object uud ni board baidlaar main hesegt haragdana.
Mun uuriin gesen object iig nemj bolno. Edgeer object uud ni list baidlaar main hesegt haragdana.

// functions
		Add object/project function
		Add section function
		Add task function

		Edit task function
		Delete task function
		Edit priority function

		Edit object function

		Edit section function

default section,
default task,
default object/project,

Object -> Section -> Add task -> (more settings)-> edit, delete, priority

Object contains Section, Add section button
Section contains Tasks, Add task button
Task contains title, description, date, checkbox, priority, more button
More button contains delete, change priority, edit functions

ObjectForm -> name, color gesen input baina MODAL (zuwhun sidebar dotroos project nemne) EDITABLE
SectionForm -> name MODAL bish (zuwhun object form buyu main heseg dotroos nemne) EDITABLE
AddForm -> title, description, date, checkbox, priority MODAL (section dotroos nemj bolno mun sidebar dotroos nemj bolno, sidebar dotroos nemsen tohioldold currentObject dotor default section shineer uusgeed dotor ni nemne)

Sidebar dahi Add project button /index.js/ -> Object modal garch irne -> Name, color buglusnii daraa shine object uuseed Main hesegruu append hiigdene.
*/


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby13ZWJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuU2lkZWJhciwgaGVhZGVyLCBtYWluIGdlc2VuIHVuZHNlbiAzIGhlc2dlZXMgYXBwIGJ1dG5lXHJcblxyXG5TaWRlYmFyIGRvdG9yIGluYm94LCB0b2RheSwgdXBjb21pbmcgZ2VzZW4gdW5kc2VuIDMgb2JqZWN0IGJhaW5hLiBFZGdlZXIgb2JqZWN0IHV1ZCBuaSBib2FyZCBiYWlkbGFhciBtYWluIGhlc2VndCBoYXJhZ2RhbmEuXHJcbk11biB1dXJpaW4gZ2VzZW4gb2JqZWN0IGlpZyBuZW1qIGJvbG5vLiBFZGdlZXIgb2JqZWN0IHV1ZCBuaSBsaXN0IGJhaWRsYWFyIG1haW4gaGVzZWd0IGhhcmFnZGFuYS5cclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG5cdFx0QWRkIG9iamVjdC9wcm9qZWN0IGZ1bmN0aW9uXHJcblx0XHRBZGQgc2VjdGlvbiBmdW5jdGlvblxyXG5cdFx0QWRkIHRhc2sgZnVuY3Rpb25cclxuXHJcblx0XHRFZGl0IHRhc2sgZnVuY3Rpb25cclxuXHRcdERlbGV0ZSB0YXNrIGZ1bmN0aW9uXHJcblx0XHRFZGl0IHByaW9yaXR5IGZ1bmN0aW9uXHJcblxyXG5cdFx0RWRpdCBvYmplY3QgZnVuY3Rpb25cclxuXHJcblx0XHRFZGl0IHNlY3Rpb24gZnVuY3Rpb25cclxuXHJcbmRlZmF1bHQgc2VjdGlvbixcclxuZGVmYXVsdCB0YXNrLFxyXG5kZWZhdWx0IG9iamVjdC9wcm9qZWN0LFxyXG5cclxuT2JqZWN0IC0+IFNlY3Rpb24gLT4gQWRkIHRhc2sgLT4gKG1vcmUgc2V0dGluZ3MpLT4gZWRpdCwgZGVsZXRlLCBwcmlvcml0eVxyXG5cclxuT2JqZWN0IGNvbnRhaW5zIFNlY3Rpb24sIEFkZCBzZWN0aW9uIGJ1dHRvblxyXG5TZWN0aW9uIGNvbnRhaW5zIFRhc2tzLCBBZGQgdGFzayBidXR0b25cclxuVGFzayBjb250YWlucyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIGNoZWNrYm94LCBwcmlvcml0eSwgbW9yZSBidXR0b25cclxuTW9yZSBidXR0b24gY29udGFpbnMgZGVsZXRlLCBjaGFuZ2UgcHJpb3JpdHksIGVkaXQgZnVuY3Rpb25zXHJcblxyXG5PYmplY3RGb3JtIC0+IG5hbWUsIGNvbG9yIGdlc2VuIGlucHV0IGJhaW5hIE1PREFMICh6dXdodW4gc2lkZWJhciBkb3Ryb29zIHByb2plY3QgbmVtbmUpIEVESVRBQkxFXHJcblNlY3Rpb25Gb3JtIC0+IG5hbWUgTU9EQUwgYmlzaCAoenV3aHVuIG9iamVjdCBmb3JtIGJ1eXUgbWFpbiBoZXNlZyBkb3Ryb29zIG5lbW5lKSBFRElUQUJMRVxyXG5BZGRGb3JtIC0+IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY2hlY2tib3gsIHByaW9yaXR5IE1PREFMIChzZWN0aW9uIGRvdHJvb3MgbmVtaiBib2xubyBtdW4gc2lkZWJhciBkb3Ryb29zIG5lbWogYm9sbm8sIHNpZGViYXIgZG90cm9vcyBuZW1zZW4gdG9oaW9sZG9sZCBjdXJyZW50T2JqZWN0IGRvdG9yIGRlZmF1bHQgc2VjdGlvbiBzaGluZWVyIHV1c2dlZWQgZG90b3IgbmkgbmVtbmUpXHJcblxyXG5TaWRlYmFyIGRhaGkgQWRkIHByb2plY3QgYnV0dG9uIC9pbmRleC5qcy8gLT4gT2JqZWN0IG1vZGFsIGdhcmNoIGlybmUgLT4gTmFtZSwgY29sb3IgYnVnbHVzbmlpIGRhcmFhIHNoaW5lIG9iamVjdCB1dXNlZWQgTWFpbiBoZXNlZ3J1dSBhcHBlbmQgaGlpZ2RlbmUuXHJcbiovXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=