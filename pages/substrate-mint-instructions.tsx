export default function SubstrateMintINstructions() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Minting NFTs on Substrate chain</h1>
      <ol>
        <li>
          Open <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fzombienet.perun.network%3A9999#/extrinsics" target="_blank">Polkadot.js</a> and tgo to the Developer &gt; Extrinisics &gt; Submission tab.
        </li>
        <li>
          (Optional) Create your own collection (not shown here).
          We have already created a collection function for you (collection: 0), you can either use it or create your own collection.
        </li>
        <li>Select the "nft" pallet and the "mint(collection,item,mintTo,witnessData)" extrinsic</li>
        <li>Select your collection (or leave it at 0)</li>
        <li>Choose a custom itemId. Note this down, you will need it in the next tasks</li>
        <li>Click "Submit Transaction" and wait until the Transaction was included in a block</li>
      </ol>
      <img src="/substrate-mint.png" style={{ width: "100%" }} />
    </div>
  )
}
