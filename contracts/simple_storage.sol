contract SimpleStorage {
  uint public storedData;

  function SimpleStorage(uint initialValue) {
    storedData = initialValue;
  }

  function set(uint x) {
    storedData = x;
  }

  function increment() {
    storedData += 1;
  }

  function get() constant returns (uint retVal) {
    return storedData;
  }
}
