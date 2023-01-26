class Note {
  constructor(_name, _file, _sharpOrFlat) {
    this.name = _name;
    this.file = _file;
    this.sharpOrFlat = _sharpOrFlat || null;
    () => {
      console.log(_name);
    };
  }
  play() {
    this.file.play();
  }
}

// const Note = function (_name, _file, _sharpOrFlat) {
//   this.name = _name;
//   this.file = _file;
//   this._sharpOrFlat = _sharpOrFlat;

//   this.play = function () {
//     this.file.play();
//   };
// };

// function Note(_name, _file, _sharpOrFlat) {
//   this.name = _name;
//   this.file = _file;
//   this._sharpOrFlat = _sharpOrFlat;

//   this.play = function () {
//     this.file.play();
//   };
// }
