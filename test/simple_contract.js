const SimpleContract = artifacts.require('SimpleContract');

contract('SimpleContract', (accounts) => {
  it('should return the list of accounts', async () => {
    console.log(accounts);
  });
it('should return the name', async () => {
    const instance = await SimpleContract.deployed();
    const value = await instance.getName();

    assert.equal(value, 'my name');
  });
})