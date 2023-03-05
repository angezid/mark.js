import MarkJS from './lib/mark';

export default function Mark(ctx) {
  const instance = new MarkJS(ctx);
  this.mark = (sv, opt) => {
    instance.mark(sv, opt);
    return this;
  };
  this.markRegExp = (sv, opt) => {
    instance.markRegExp(sv, opt);
    return this;
  };
  this.markRanges = (sv, opt) => {
    instance.markRanges(sv, opt);
    return this;
  };
  this.markObjects = (sv, opt, index) => {
    instance.markObjects(sv, opt, index);
    return this;
  };
  this.unmark = (opt) => {
    instance.unmark(opt);
    return this;
  };
  this.getVersion = () => {
    return instance.version;
  };
  return this;
}