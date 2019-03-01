export default name => name.replace(/([a-z])([0-9])/, '$1 $2').replace(/^(.{1})/, (s, c) => c.toUpperCase());
