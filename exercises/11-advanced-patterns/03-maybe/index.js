class Maybe {
  constructor(value) { this._v = value; }
  static of(v) { return new Maybe(v); }
  map(fn) { return this._v == null ? Maybe.of(null) : Maybe.of(fn(this._v)); }
  getOrElse(def) { return this._v == null ? def : this._v; }
}

module.exports = { Maybe };
